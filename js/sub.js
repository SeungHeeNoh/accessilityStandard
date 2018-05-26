var aout = 1;
var ulout = 1;

function hideMenu(){
	var gnb = document.getElementById("gnb");
	var menuList = gnb.children;
	var headerWrap = document.getElementById("headerWrap");
	
	if(aout && ulout){
		for(var j=0; j<menuList.length; j++){
			var imgVar = menuList[j].children[0].children[0];
			imgVar.src=imgVar.src.replace("_over.jpg", ".jpg");
			menuList[j].children[1].style.display = "none";
		}
		headerWrap.style.height = "110px"
	}
}

window.onload = function(){
	var gnb = document.getElementById("gnb");
	var menuList = gnb.children;
	var subMenu = gnb.getElementsByTagName("ul");
	var myauto = null;
	var headerWrap = document.getElementById("headerWrap");
	var siteLink = document.getElementById("siteLink")
	var siteLinkSub = siteLink.getElementsByTagName("li")
	
	for(var i=0; i<menuList.length; i++){
		menuList[i].children[0].onmouseover = function(){//ain -> aout = 0;
			hideMenu();
			
			this.children[0].src = this.children[0].src.replace(".jpg", "_over.jpg");
			headerWrap.style.height = "425px";
			var nextNode = this.nextSibling;
			if(nextNode.nodeType == 3){
				nextNode = nextNode.nextSibling;
			}
			nextNode.style.display = "block"
			
			aout = 0;
		}
		menuList[i].onmouseout = function(){//aout = 1;
			if(myauto) clearTimeout(myauto);
			myauto =  setTimeout(hideMenu, 1000);
			aout = 1;
		}
		subMenu[i].onmouseouver = function(){ //ulin - > ulout=0;
			ulout = 0;
		}
		subMenu[i].onmouseout = function(){
			if(myauto) clearTimeout(myauto);
			myauto = setTimeout(hideMenu, 1000);
			ulout = 1;
		}
		
	}
	
	for(var i=0; i<siteLinkSub.length; i++){
		siteLinkSub[i].children[0].onclick = function(e){
			e.preventDefault();
			this.parentElement.classList.toggle("on");	
		}
	}
}//window.onload
