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

function openFunc() {
	var s=1;
	if (sex=='f'){var mask = localStorage.getItem("storedmask");
			s=19;}
	else {var mask = localStorage.getItem("storedmaskm");
		s=17;}
	for (i=0; i<s; i++) {
		if ((mask & Math.pow(2,i))>0) {document.getElementById("par"+(i+1)).checked=true;}
	};
	var winopen = document.getElementById('myModal').style.display;
	if (winopen=="none"){
					document.getElementById('myModal').style.display = "block";}
	else {
					document.getElementById('myModal').style.display = "none";
					document.location.reload(true);}
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
   if (sex=="f"){localStorage.setItem("storedmask", thismask);}
   	else {localStorage.setItem("storedmaskm", thismask);}
	document.getElementById('myModal').style.display = "none";
	document.location.reload(true);
}

function clearFunc() {
	var s = 1;
	if (sex=="f") {s=19} else {s=17};
	for (i=0; i<s; i++) {
		document.getElementById("par"+(i+1)).checked = false;
		localStorage.setItem("storedmask", 0);
	}
}

function sexChange() {
	var sex = localStorage.getItem("storedsex");
	if (sex == "m") {localStorage.setItem("storedsex","f");} 
	if (sex == "f") {localStorage.setItem("storedsex","m");
 			        document.getElementById("sexicon").src="images/female.png"; }
	document.location.assign("main.htm");
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
	localStorage.setItem("storedmode",0);
	document.location.assign("main.htm");
}

function sortbyspecific(){
	localStorage.setItem("storedmode",1);
	document.location.assign("main.htm");
}

function sortbysize(){
	localStorage.setItem("storedmode",2);
	document.location.assign("main.htm");
}
