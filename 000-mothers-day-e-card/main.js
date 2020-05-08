// TODO
//
//      1) Basic Layout
//      2) Click Event to Start Things
//      3) Create the Add Screen Functionality
//      4) Run Through Screens

// GIVEN
//      -Images
//      -Song
//      -Fonts

(() => {
    // variables
    const song = new Audio("sounds/mother.mp3")
    const stage = document.getElementById("stage")
    const title = document.getElementById("title")
    const screenDuration = 5000 // ms
    let isPlaying = false
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
        
        isPlaying = true
        song.play()
        title.innerText = ""
        
        setTimeout(() => {
            title.innerText = "You're the..."
            runThroughScreens()
        }, 2000)
    })

    function addScreen (options, deleteAfter) {

        console.log(options)

        const imageElementString = `
        <img src="${
            options.image
        }" class="image ${
            options.imageAnimation || ""
        }">
        `
        const textElementString = `
        <div style="${
            options.textColor ?
            `color: ${options.textColor}` :
            ''
        }" class="text ${
            options.textColor || ""
        }">${
            options.text
        }</div>
        `

        const imageElement = stringToDom(imageElementString)
        const textElement = stringToDom(textElementString)

        stage.append(imageElement)
        stage.append(textElement)

        if (deleteAfter) {
            setTimeout(() => {
                imageElement.remove()
                textElement.remove()
            }, screenDuration)
        }
    }

    function runThroughScreens (i = 0) {
        if (i >= screens.length)
            return
        
        addScreen(screens[i], i === screens.length - 1 ? false : true)

        setTimeout(() => {
            runThroughScreens(++i)
        }, screenDuration)
    }

    function stringToDom (htmlString) {
        const dom = new DOMParser()
        const domParsed = dom.parseFromString(htmlString, "text/html")
        return domParsed.body.children[0]
    }

})()