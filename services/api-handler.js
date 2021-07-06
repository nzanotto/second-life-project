class CoordinatesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://maps.googleapis.com/maps/api/geocode'
        })
    }

    getCoordinates = info => this.axiosApp.get('/json?address=', info)

}


// getCoordinatesFromAPI()
// function getCoordinatesFromAPI() {

//     apiHandler
//         .getCoordinates()
//         .then(response => {
//             let address = ''

//         })
//     console.log('esta es la direccion', address, response)
// }