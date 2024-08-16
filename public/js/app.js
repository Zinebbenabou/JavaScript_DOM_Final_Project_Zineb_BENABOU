let body = document.querySelector("body")
let dispalyMenu = document.querySelector(".display-menu")
let navMenu = document.querySelector(".menu-nav")
let closeMenu = document.querySelector(".close-menu")
let logo = document.querySelector(".logo")
let signInBtn = document.querySelector(".signinbtn")
let watchVideo = document.querySelector(" .bi-play-fill")
let video = document.querySelector(".containerVideo")

dispalyMenu.addEventListener("click", ()=>{
  navMenu.style.display="flex"
  body.style.backgroundColor = " #000000bc"
  
})
closeMenu.addEventListener("click", ()=>{
   navMenu.style.display="none"
   body.style.backgroundColor = "#fff"
})
watchVideo.addEventListener("click", ()=>{
  video.style.display= "flex"
  body.style.backgroundColor = " #000000bc"


})
// & menu
let tabs = document.querySelectorAll(".tab-btn")
let menu = document.querySelectorAll(".content-box")
let menuTitle = document.querySelectorAll(".title-about")
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")
let contentBox = document.querySelector("content-box ") 
tabs.forEach((tab )=> {
  tab.addEventListener("click", ()=>{
    tabs.forEach(tab =>{tab.classList.remove("active")})
    tab.classList.add("active")
  })
});  

breakfast.addEventListener("click",()=>{
  menuTitle[2].textContent= "Breakfast"
  contentBox.classList.add("animation-menu")
})
starters.addEventListener("click",()=>{
  menuTitle[2].textContent= "Starters"
  contentBox.classList.add("animation-menu")
})
lunch.addEventListener("click",()=>{
  menuTitle[2].textContent= "Lunch"
})
dinner.addEventListener("click",()=>{
  menuTitle[2].textContent= "Dinner"

})

