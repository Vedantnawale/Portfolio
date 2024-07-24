var typed = new Typed(".text", {
    strings: ["Full Stack JS Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

let bar = document.getElementById('bar')
let cmark = document.getElementById('cmark')
let nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active')
    })
}
if (cmark){
    cmark.addEventListener("click",()=>{
        nav.classList.remove('active')
    })
}
