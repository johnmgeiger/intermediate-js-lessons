// TODO
//
//  api for working with our card player
//      - display screen elements
//      - customize for transitions
//      - customize for while-showing effects

(() => {
    // variables
    const song = new Audio('sounds/mother.mp3')
    const stage = document.getElementById('stage')
    const title = document.getElementById("title")

    let isPlaying = false
    const screenDuration = 5000 //ms
    const screens = [
        {
            image: "img/coolest.png",
            imageAnimation: "spinImage",
            text: "Coolest",
            textAnimation: "fade",
            textColor: "#4169e1"
        },
        {
            image: "img/smartest.png",
            imageAnimation: "growSpinImage",
            text: "Smartest",
            textAnimation: "fade",
            textColor: "#ff781f"
        },
        {
            image: "img/nicest.png",
            imageAnimation: "fade",
            text: "Nicest",
            textAnimation: "fade",
            textColor: "#00a86b"
        },
        {
            image: "img/patient.png",
            imageAnimation: "spinImage",
            text: "Most Patient",
            textAnimation: "fade",
            textColor: "#663399"
        },
        {
            image: "img/best.png",
            imageAnimation: "fadeIn",
            text: "Best, Mom",
            textAnimation: "fadeIn",
            textColor: "#E07CA0"
        }
    ]
    
    // play on press
    stage.addEventListener('click', _ => {
        if (isPlaying)
            return
        else
            isPlaying = true
        
        song.play()
        title.innerHTML = ""

        setTimeout(() => {
            title.innerHTML = "You're the..."
        }, 1000)

        setTimeout(() => {
            runThroughScreens()
        }, 2000)
    })

    function addScreen (options, deleteAfter) {
        console.log('adding screen')
        const imgString = `
        ${
            options.image ?
            `<img class="image ${
                    options.imageAnimation ?
                    options.imageAnimation :
                    ""
                }" src="${options.image}">` :
            ""
        }`
        
        const textString = `<h2 class="text ${
            options.textAnimation ?
            options.textAnimation :
            ""
            }" ${
                options.textColor ?
                `style="color:${options.textColor}"` :
                ""
            }>
            ${options.text ? options.text : ""}
        </h2>
        `

        const imgElement  = stringToDom(imgString)
        const textElement = stringToDom(textString)
        stage.append(imgElement)
        stage.append(textElement)

        if (!deleteAfter)
            return

        setTimeout(() => {
            console.log('time to remove', deleteAfter)
            imgElement.remove()
            textElement.remove()
        }, deleteAfter)
    }

    function runThroughScreens (i = 0) {
        if (i > screens.length - 1)
            return
        
        addScreen(screens[i], i === screens.length - 1 ? false : screenDuration)

        setTimeout(() => {
            runThroughScreens(++i)
        }, screenDuration)
    }

    function stringToDom (htmlString) {
        const parser = new DOMParser()
        const dom = parser.parseFromString(htmlString, "text/html")
        return dom.body.children[0]
    }

})()