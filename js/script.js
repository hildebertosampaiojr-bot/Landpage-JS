"use strict";
function closeMenus(){
 document.querySelectorAll(".dropdown").forEach(menu=>menu.classList.remove("active"));
 document.querySelectorAll(".menu-btn[aria-controls]").forEach(btn=>btn.setAttribute("aria-expanded","false"));
}
function toggleMenu(id){
 const menu=document.getElementById(id);
 if(!menu)return;
 const button=document.querySelector('.menu-btn[aria-controls="'+id+'"]');
 const wasOpen=menu.classList.contains("active");
 closeMenus();
 if(!wasOpen){menu.classList.add("active");button?.setAttribute("aria-expanded","true");}
}
document.addEventListener("click",event=>{
 if(!event.target.closest(".menu-dropdown"))closeMenus();
});
document.addEventListener("keydown",event=>{
 if(event.key==="Escape"){closeMenus();document.activeElement?.blur();}
});
document.querySelectorAll(".dropdown a").forEach(link=>link.addEventListener("click",closeMenus));
