
document.querySelector("textarea").addEventListener("keyup", function (event) {
    const log = document.querySelector("div#log")
    if (this.value != "") {
        log.innerHTML = this.value
        changeCursor(event)
    }
    else {
        log.innerHTML = "start typing"
    }
})


