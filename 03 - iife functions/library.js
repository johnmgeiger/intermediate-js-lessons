
const hoverElements = document.getElementsByClassName('hover-me')

for (el of hoverElements) {
    const originalColor = el.style.color
    
    el.addEventListener('mouseover', ev => {
        ev.target.style.color = "#888"
    })
    el.addEventListener('mouseout', ev => {
        ev.target.style.color = originalColor
    })
}

// (function () {
//     let message = "Hello, Iify!"
//     console.log(message)
// }())