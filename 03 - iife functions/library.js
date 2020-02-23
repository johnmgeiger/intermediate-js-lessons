// TODO:
//      - make this an IIFE function
//      - make a closure
//      - track how many times a color is changed
//      - make that number of changes accessible with a getter

const hoverMe = (function () {
    let colorChangerCounter = 0

    const incramentColorCounter = () => {
        colorChangerCounter += 1
    }

    const hoverElements = document.getElementsByClassName('hover-me')

    for (el of hoverElements) {
        const originalColor = el.style.color

        el.addEventListener('mouseover', ev => {
            incramentColorCounter()
            ev.target.style.color = "#888"
        })
        el.addEventListener('mouseout', ev => {
            incramentColorCounter()
            ev.target.style.color = originalColor
        })
    }

    const colorChanges = () => colorChangerCounter

    return {
        colorChanges,
    }
}())