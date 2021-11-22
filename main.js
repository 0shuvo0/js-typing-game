const str = "Type this as fast as possible."
const text = document.querySelector(".text")
const input = document.querySelector(".input")
const progressBar = document.querySelector(".progress-bar")

let timer = null

const charEls = []

function populateText(str){
    str.split("").map(letter => {
        const span = document.createElement("span")
        span.innerText = letter
        text.appendChild(span)
        charEls.push(span)
    })
}
populateText(str)

function resetCharEls(){
    charEls.map(charEl => {
        charEl.classList.remove("correct")
        charEl.classList.remove("wrong")
    })
}

function start(){
    progressBar.classList.add("active")
    timer = setTimeout(() => {
        alert("Time's up!")
    }, 10000)
}

input.addEventListener("keyup", () => {
    if(!timer){
        start()
    }
    const val = input.value
    resetCharEls()
    let errorCount = 0
    val.split("").map((letter, i) => {
        if(letter === str[i]){
            charEls[i].classList.add("correct")
        }else{
            charEls[i].classList.add("wrong")
            errorCount++
        }
    })
    if(val.length === str.length && errorCount === 0){
        clearTimeout(timer)
        alert("Well Done!")
    }
})

input.focus()