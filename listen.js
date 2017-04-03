document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("load", drawerFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("drawer").addEventListener("click", openFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("sexicon").addEventListener("click", sexChange);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("help").addEventListener("click", openhelp);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clear").addEventListener("click", clearFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("apply").addEventListener("click", closeFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("search").addEventListener("click", openSearch);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("sort").addEventListener("click", openSort);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("fullname").addEventListener("click", normalmode);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("specificname").addEventListener("click", sortbyspecific);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("size").addEventListener("click", sortbysize);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("modalOverlay").addEventListener("click", closeFunc);
});

function openFunc() {
	var s=1;
	if (sex == sessionStorage.getItem("storedsex")){
	if (sex=='f'){var mask = sessionStorage.getItem("storedmask");
			s=19;}
	else {var mask = sessionStorage.getItem("storedmaskm");
		s=17;}
	for (i=0; i<s; i++) {
		if ((mask & Math.pow(2,i))>0) {document.getElementById("par"+(i+1)).checked=true;}
	};
	var winopen = document.getElementById('myModal').style.display;
	if (winopen=="none"){
					document.getElementById('myModal').style.display = "block";
					document.getElementById('modalOverlay').style.display = "block";}
	else {
					document.getElementById('myModal').style.display = "none";
					document.getElementById('modalOverlay').style.display = "none";
					document.location.reload(true);}
	} else {
		sex = sessionStorage.getItem("storedsex");
		document.location.assign("main.htm");
	}
};

function closeFunc() {
	var thismask = 0;
	var s = 1;
	if (sex=="f") {s=19;} else {s=17}
	for (i=0; i<s; i++) {
	if (document.getElementById("par"+(i+1)).checked) {
	thismask = thismask + Math.pow(2,i)
	}
   }
   if (sex=="f"){sessionStorage.setItem("storedmask", thismask);}
   	else {sessionStorage.setItem("storedmaskm", thismask);}
	document.getElementById('myModal').style.display = "none";
	document.getElementById('modalOverlay').style.display = "none";
	document.location.reload(true);
}

function clearFunc() {
	var s = 1;
	if (sex=="f") {s=19} else {s=17};
	for (i=0; i<s; i++) {
		document.getElementById("par"+(i+1)).checked = false;
		sessionStorage.setItem("storedmask", 0);
	}
}

function sexChange() {
	var sex = sessionStorage.getItem("storedsex");
	if (sex == "m") {sessionStorage.setItem("storedsex","f");
 			document.getElementById("sexicon").src="female.png";
			if (sessionStorage.getItem("storedmaskm")!=0){
			var x = document.getElementsByClassName("thumb");
			for (var i=0; i<x.length;i++) {y=x[i].src;
					y=y.substring(0,y.length-5)+".jpg";
					x[i].src=y;}
			document.getElementById("mf").innerHTML="females";
			} else {
			document.location.assign("main.htm");}
	} 
	if (sex == "f") {sessionStorage.setItem("storedsex","m");
 			document.getElementById("sexicon").src="male.png";
			if (sessionStorage.getItem("storedmask")!=0){
			var x = document.getElementsByClassName("thumb");
			for (var i=0; i<x.length;i++) {y=x[i].src;
					y=y.substring(0,y.length-4)+"m.jpg";
					x[i].src=y;}
			document.getElementById("mf").innerHTML="males";
			} else {
			document.location.assign("main.htm");}
	}
}

function openhelp() {
	document.location.assign("help.htm");
}

function drawerFunc(){
		document.getElementById('myModal').style.display = "none";
}

function openSearch(){
    document.getElementById('searchFor').style.display = "block";
    document.getElementById('input').focus();
}

function openSort(){
    document.getElementById('sortBy').style.display = "block";
}

function normalmode(){
	sessionStorage.setItem("storedmode",0);
	document.location.assign("main.htm");
}

function sortbyspecific(){
	sessionStorage.setItem("storedmode",1);
	document.location.assign("main.htm");
}

function sortbysize(){
	sessionStorage.setItem("storedmode",2);
	document.location.assign("main.htm");
}

