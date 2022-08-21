import React from "react"
import "./Styling/Header.css"
import "./Styling/MainStyling.css"

import Header from "./Components/Header"
import Counter from "./Components/Counter"

export default function App() {
    return (
        <div className="document-app">
            <Header />
            <Counter />
        </div>
    )
}