
export default function (guitar) {
    // get a random string and a random note from that string
    const randomString = Math.ceil(Math.random() * guitar.length)
    const randomNote = guitar[randomString - 1][
        Math.floor(Math.random() * guitar[randomString - 1].numFrets)
    ].note

    return {
        string: randomString,
        note: randomNote,
    }
}