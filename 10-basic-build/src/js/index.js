import second from './second'

// include this for when css is
// added to webpack
// import "../css/main.scss"

(() => {
    console.log("Running from index.")
    console.log(second())
})()