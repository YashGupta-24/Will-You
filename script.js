let noButton = document.querySelector("#no");
let yesButton=document.querySelector("#yes");
let gif=document.querySelector(".gif");
noButton.addEventListener("mouseover", () => {
    noButton.classList.add("hide");
});

yesButton.addEventListener("mouseover", () => {
    gif.classList.add("hide");
    document.querySelector(".happygif").classList.remove("hide")
});

noButton.addEventListener("mouseout", () => {
    noButton.classList.remove("hide")
});

yesButton.addEventListener("mouseout", () => {
    gif.classList.remove("hide");
    document.querySelector(".happygif").classList.add("hide")
});

yesButton.addEventListener("click",()=>{
    open("next.html");
})