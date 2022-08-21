import React from "react"

export default function Header() {
    return (
        <div className="document-header">
            <h1>Welcome!</h1>
            <h3>Click on the counter to generate some people</h3>
        </div>
    )
}

// adds a new div
$('<div>',  {
    class: 'payNowBtn-fourth',
    id: 'payNow'
}).appendTo('.step4-infomain-cont')



//TODO: create style
/*
payNowBtn.style.backgroundColor = '#b4b8b5'
payNowBtn.style.paddingTop = '75px'
payNowBtn.style.borderRadius = '10px'
 */
$('<style>', {

})

const payNowBtn = document.body.querySelector('.payNowBtn-fourth')



