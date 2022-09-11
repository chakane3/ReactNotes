function Get100Artworks() {
    fetch('https://api.artic.edu/api/v1/artworks/?limit=100&page=5')
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response isnt good, check URL')
        }
        return response.json()
    })
    .then((data) => console.log(data))
}

function GetArtworkImg(img_id) {
    fetch(`https://www.artic.edu/iiif/2/${img_id}/full/843,/0/default.jpg`)
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response isnt good, check URL')
        }
        return response.blob()
    })
}
let dataRtn;
function GetOne(dataRtn) {
    fetch('https://api.artic.edu/api/v1/artworks/?limit=1')
    .then((response) => {
        if(!response.ok) {
            throw new Error('Networkresponse inst good, check URL')
        }
        return response.json()
    })
    .then((data) => {
        return data.data[0].artist_title
    })
}

function GetImage(identifier) {
    return fetch(`https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })
}

export {Get100Artworks};
export {GetArtworkImg};
export {GetOne};
export {GetImage}
export {dataRtn}
/*
artist_title (name [str])
date_display (year [str])


https://api.artic.edu/api/data:image/gif;base64,R0lGODlhBAAFAPQAACQpJiguLS4yMjM2NTQ5Ojg8OTxAQkdLSURJTGdnY2RnZHFzb3l7eoKDgYSEgomLjY2Oj5GRjsfGwsbFxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoOQ0UwQI0KEMz1IQTGIgQQgAOw==
*/