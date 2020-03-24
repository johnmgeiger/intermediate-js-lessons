// EXAMPLE ONE
function exampleOne () {
    const worker1 = new Worker("./worker1.js")

    console.log("Let's post a message!")
    worker1.postMessage("This is a message posted from our main thread.")
}

// EXAMPLE TWO

// this function may set the onmessage
// because a worker is an object,
// therefore passed as reference
function initEventHandling (w) {
    w.onmessage = function (ev) {
        const data = ev.data

        console.log("(Main) received message of type", data.type)
        console.log(data.message)
    }
}

function exampleTwo () {
    const worker2 = new Worker("./worker2.js")
    initEventHandling(worker2)

    console.log("Let's ask for a number")
    worker2.postMessage({ type: "getNumber" })

    console.log("Let's ask for a greating")
    worker2.postMessage({ type: "getGreating" })
}

// IIFE
(function exampleThree () {
    // Taken from lesson 05 on the Event Loop
    const iterations = 500000000
    const workerCount = 2

    // Goal:    Get the sum from 0 -> iterations - 1
    //          without blocking the main loop

    // dom
    const countButton = document.getElementById("b1")
    const calcButton = document.getElementById("b2")

    // event listeners
    countButton.addEventListener("click", ev => {
        let i = 0
        const interval = setInterval(() => {
            console.log(i)

            if (i >= 10) {
                clearInterval(interval)
            }

            i+= 1
        }, 1000)
    })
    
    calcButton.addEventListener("click", ev => {
        const worker3 = new Worker('./worker3.js')

        console.log("Beginning Calculation")
        const startTime = new Date()

        worker3.postMessage(500000000)
        
        worker3.onmessage = ev => {
            console.log("Calculation Finished!")
            console.log(ev.data)
            console.log(`Time: ${(new Date - startTime) / 1000} seconds`)
        }
    })
})()