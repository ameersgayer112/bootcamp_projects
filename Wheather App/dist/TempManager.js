
 class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        const cities = await $.get('/cities')
        this.cityData = cities
        return this.cityData

    }

    async getCityData(cityName) {
        let city = await $.get(`/city/${cityName}`)
        this.cityData.push(city)
        return this.cityData
    }

    async saveCity(cityName) {

        const checkCityinDB = this.cityData.find(city => city.name === cityName)
        if (checkCityinDB) {
            console.log('city already exist in DB')
        }
        else {
            const newCity = await $.post(`/city/:${cityName}`)
            console.log(`${newCity.name} Saved successfuly to DB `)
            this.cityData.push(newCity)
        }
    }

    async removeCity(cityName) {
        const responseFromserver = await $.delete(`/city/:${cityName}`)
        const index = this.cityData.findIndex(city => city.name === cityName)
        this.cityData.splice(index, 1)
    }

}



