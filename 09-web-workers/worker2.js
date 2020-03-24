
// HELPER FUNCTIONS
const sayHelloBack = () => "Hello, World"
const getRandomNumber = () => Math.floor(Math.random(0, 10) * 10)

// EVENT HANLDING
function handleNewMessage (d) {
    
    if (d.type === "getNumber") {
        self.postMessage({
            type: "numberBack",
            message: getRandomNumber(),
        })
    }
    else if (d.type === "getGreating")
        self.postMessage({
            type: "greetingBack",
            message: sayHelloBack(),
        })
}

// the self. portion is not necessary here
self.onmessage = function (ev) {
    const data = ev.data

    console.log("(Worker2) Received a new message object:", data)
    handleNewMessage(data)
}