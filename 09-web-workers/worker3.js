
// Same logic as lesson 5
onmessage = ev => {
    const addUntil = ev.data

    let total = 0
    for (let i = 0; i < addUntil; i++) {
        total += i
    }

    self.postMessage(total)
}