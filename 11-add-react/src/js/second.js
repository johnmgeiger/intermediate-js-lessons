import React from 'react'
import ReactDOM from 'react-dom'

import AppOne from './react/comp1/AppOne'
import AppTwo from './react/comp2/AppTwo'

import { decorate, observable } from "mobx"

let CountStore  = {
    count: 0
}
decorate(CountStore, {
    count: observable,
})

function renderCounter () {
    console.log("Rendering Render counter")
    const wrapper = document.getElementById("buttonApp")

    if (wrapper) {
        ReactDOM.render(<AppOne store={CountStore} />, wrapper)
    }
}

function renderLabel() {
    console.log("Rendering Label")
    const wrapper = document.getElementById("labelApp")

    if (wrapper) {
        ReactDOM.render(<AppTwo store={CountStore} />, wrapper)
    }
}

export default function () {
    renderCounter()
    renderLabel()
}