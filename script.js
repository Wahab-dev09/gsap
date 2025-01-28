const cards = document.querySelectorAll(".card")
cards.forEach((element)=>{
  gsap.to(`.${element.classList[1]}`,{
    scale:0.6,
    y: 40,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
      trigger: `.${element.classList[1]}`,
      scroller: "body",
      start: "top 20%",
      end: "top -5%",
      scrub: 2,
    }
    })
})
console.log(cards)
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  duration:1.4,
});