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

function GetOne() {
    fetch('https://api.artic.edu/api/v1/artworks/?limit=1')
    .then((response) => {
        if(!response.ok) {
            throw new Error('Networkresponse inst good, check URL')
        }
        return response.json()
    })
    .then((data) => console.log(data))
}

export {Get100Artworks};
export {GetArtworkImg};
export {GetOne};