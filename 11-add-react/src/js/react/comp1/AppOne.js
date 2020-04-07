import React from 'react'


const AppOne = props => {

    return (
        <div>
            <h6>Counter</h6>
            <button onClick={() => {
                console.log("pressed")
                props.store.count++
            }}>Press Me</button>
        </div>
    )
}

export default AppOne