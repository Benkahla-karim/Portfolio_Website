const seeMoreBtn = document.querySelectorAll(".service .offer-btn ");
const moreSection = document.querySelector(".more");
const moreCloseBtn = document.querySelectorAll(".more .more-close-btn");
const moreData = document.querySelectorAll(".more .more-data")
const categoryBtn = document.querySelectorAll(".category-header .category-btn");
const categoryContainer = document.querySelector(".category-container")
const categorys = document.querySelectorAll(".category-container .category");
const testimonialsContianer = document.querySelector(".testimonials-container")
const menuLinks = document.querySelectorAll(".nav-menu a")
console.log(menuLinks)
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((link) => {
            link.classList.remove("active")
        })
        link.classList.add("active")
    })

})


// Show more data in service section
seeMoreBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        moreSection.classList.add("active")
        let id = e.target.parentElement.dataset.more
        console.log(id)
        moreData.forEach((data) => {
            data.style.display = "none"
        })
        moreSection.querySelector(`#${id}`).style.display = "flex"
    })

})
moreCloseBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        moreSection.classList.remove("active")
    })
})

// show category work
categoryBtn.forEach((btn) => {
    btn.addEventListener("click", activeBtn)
})
function activeBtn() {
    categoryBtn.forEach((btn) => {
        btn.classList.remove("active")
    })
    this.classList.add("active")
    showCategorys(this)
}
function showCategorys(buttonCategory) {
    let idNeed = buttonCategory.dataset.cat
    categorys.forEach((category) => {
        category.style.display = "block"
    })
    categorys.forEach((category) => {
        if (category.id !== idNeed) {
            category.style.display = "none"
        }
    })
    if (idNeed === "all") {
        categorys.forEach((category) => {
            category.style.display = "block"
        })
    }
}
// scroll in testimonialsContianer 
testimonialsContianer.addEventListener("touchstart", e => {
    e.target.style.transform = `translateX(-400px)`
    console.log(e.target)
})

// Swipper amimation
let swiperTestimonials = new Swiper(".container-swip", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});
// Add dark mode
const darkButton = document.querySelector(" .theme-button")
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const slectedIcon = localStorage.getItem("selected-icon");

console.log(selectedTheme)
console.log(slectedIcon)
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => darkButton.classList.contains(iconTheme) ? "fa-sun" : "fa-moon"

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    darkButton.classList[slectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

darkButton.addEventListener("click", () => {
    // add class dark theme
    document.body.classList.toggle(darkTheme)
    darkButton.classList.toggle(iconTheme)
    // we set all changed in localstorage
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})


// show header in scroll 
const header = document.querySelector(".header")
window.onscroll = () => {
    if (window.scrollY > 72) {
        header.classList.add("shadow-header")
    } else {
        header.classList.remove("shadow-header")
    }
}

// Scroll animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset:true

})
sr.reveal(`.home-data`)
sr.reveal(`.home-img`, { delay: 700 })
sr.reveal(`.home .media`, { delay: 900, origin: "bottom" })
sr.reveal(`.about-img`, { origin: "left" })
sr.reveal(`.about-data`, { origin: "right" })
sr.reveal(`.experience .box-one`, { origin: "left" })
sr.reveal(`.experience .box-two`, { origin: "right" })
sr.reveal(`.category-container`, { delay: 900, origin: "bottom" })
sr.reveal(`.talk`, { origin: "left" })
sr.reveal(`.write`, { origin: "right" })