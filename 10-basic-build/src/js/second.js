const [first, second, third] = ["First", "second", "third"]

export default function () {
    console.log("Running from second.")
    console.log(`${first} followed by ${second}, and then ${third}.`)
}