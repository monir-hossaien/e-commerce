const menuIcon=document.getElementById("menu_icon");
const nav=document.getElementById("menu");

menuIcon.addEventListener("click",()=>{
    if(nav.className ==="hidden"){
        nav.classList.remove("hidden")
    }else{
        nav.classList.add("hidden")
    }
})