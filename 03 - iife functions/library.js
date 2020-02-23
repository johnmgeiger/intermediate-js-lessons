// TODO:
//      - make this an IIFE function
//      - make a closure
//      - track how many times a color is changed
//      - make that number of changes accessible with a getter

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