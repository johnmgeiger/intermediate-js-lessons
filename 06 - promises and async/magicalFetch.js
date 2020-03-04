const magicalFetch = (cb) => {
    const dummyData = `{"list": [10, 23, 43, 87, 9]}`

    if (cb) {
        setTimeout(() => {
            cb(dummyData)
        }, 1000)
    } 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // promises may resolve to continue
            resolve(dummyData)
        }, 1000)

        // promises may reject if something goes wrong
        // reject( new Error("Failed to retreive list."))
    })
}

