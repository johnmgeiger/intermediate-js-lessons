import React from 'react'
import { observer } from 'mobx-react'

const AppTwo = props => {

    return (
        <div>
            <h6>At: {
                    typeof(props.store.count) === "number" ? 
                    props.store.count : 
                    "N/A"
                }</h6>
        </div>
    )
}

export default observer(AppTwo)