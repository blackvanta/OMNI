document.querySelector("textarea").addEventListener("keyup", function () {
    let div = document.querySelector("div")

    if (this.value = ! "") {
        div.innerHTML = this.value
    }
    else {
        div.innerHTML = "start typing"
    }
})
