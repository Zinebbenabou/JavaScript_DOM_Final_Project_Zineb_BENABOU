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
// caroussel 
let nextBtns = document.querySelectorAll(".next")
let previousBtns = document.querySelectorAll(".previous")
let containers = document.querySelectorAll(".carousel-container")



//* sliding function
let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')





            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")


            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
});

previousBtns.forEach(previous => {
    previous.addEventListener("click", (event) => { slideImage(currentIndex - 1, event.target) })
});


containers.forEach(container => {
    if (container.getAttribute("autoslide")) {
        let nextBtn = container.querySelector(".next")

        setInterval(() => {
            nextBtn.click()
        }, 3000);
    }
});

 

containers.forEach(container => {
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
   
});


