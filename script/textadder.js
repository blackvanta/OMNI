const texts = [
    "maternal voice maternal voice maternal voice",
    "maternal voice",
    "*inget ar gratis",
    "gratis* spirit!!!"
]

let i = 0;
let writer = document.querySelector("textarea")
let log = document.querySelector("div#log")

function placeText(x, y, textValue) {
    const nextText = texts[i];
    const txt = document.createElement("span")
    txt.classList.add("img")
    txt.innerText = textValue
    txt.style.left = x + "px"
    txt.style.top = y + "px"

    document.body.appendChild(txt)
    i++;

    if (i >= texts.length) {
        i = 0;
    }
    writer.value = ""
    log.innerText = "Start Typing..."
}

document.addEventListener("click", function (event){
    touchAndClick(event)
})

document.addEventListener("touchend", function (event){
    touchAndClick(event)
})


document.addEventListener("mousemove", function(event){
    changeCursor(event)
})

function changeCursor(event){
    const x = event.pageX -25;
    const y = event.pageY -25;
    const cursor = document.querySelector("div#cursor");
    cursor.innerText = writer.value;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}

function touchAndClick(event){
    event.preventDefault();
    placeText(event.pageX,event.pageY,writer.value)
}

