import {y} from "./yM.js"

function x (param) {
    y(param)
    console.log("x: " + param)
    return "fin x"
}

function xx(param) {
    return "fin x"
}

export {x, xx}