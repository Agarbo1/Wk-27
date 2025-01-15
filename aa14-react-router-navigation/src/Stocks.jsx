import { Navigate } from "react-router-dom"

let loggedIn = false

if (loggedIn === false) {
    Navigate('/not-logged-in')
}
