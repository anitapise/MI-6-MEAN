(function () {

    var navButton = document.querySelector("#nav-menu-button");
    var navUl = document.querySelector(".nav-ul");
    function toggleMobileMenu() {
        navUl.classList.toggle("hide-ul");
    }
    navButton.onclick = toggleMobileMenu;
}());
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//for slider images
const controls=document.querySelector(".controls");
const container=document.querySelector(".thumbnail-container");
const allBox=container.children;
const containerWidth=container.offsetWidth;
const margin=30;
var items=0;
var totalItems=0;
var jumpSlideWidth=0;
// item setup per slide
responsive=[
    {breakPoint:{width:0,item:2}}, //if width greater than 0 (1 item will show) 
    {breakPoint:{width:600,item:3}}, //if width greater than 600 (2  item will show) 
    {breakPoint:{width:1000,item:4}} //if width greater than 1000 (4 item will show) 
]
function load(){
   for(let i=0; i<responsive.length;i++){
        if(window.innerWidth>responsive[i].breakPoint.width){
            items=responsive[i].breakPoint.item
     }
   }
   start();
}
function start(){
    var totalItemsWidth=0
    for(let i=0;i<allBox.length;i++){
        // width and margin setup of items
        allBox[i].style.width=(containerWidth/items)-margin + "px";
        allBox[i].style.margin=(margin/2)+ "px";
        totalItemsWidth+=containerWidth/items;
        totalItems++;
    }
    container.style.width=totalItemsWidth + "px";
    const allSlides=Math.ceil(totalItems/items);
    const ul=document.createElement("ul");
        for(let i=1;i<=allSlides;i++) {
            const li=document.createElement("li");
            li.id=i;
            li.innerHTML=i;
            li.setAttribute("onclick","controlSlides(this)");
            ul.appendChild(li);
            if(i==1){
            li.className="active";
        }
    }
    controls.appendChild(ul);
}
// when click on numbers slide to next slide
function controlSlides(ele){
    const ul=controls.children;
    const li=ul[0].children
    var active;
    for(let i=0;i<li.length;i++) {
       if(li[i].className=="active") {
            active=i;
            li[i].className="";
       }
    }
    ele.className="active";
    var numb=(ele.id-1)-active;
    jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
    container.style.marginLeft=-jumpSlideWidth + "px";
}
window.onload=load();
