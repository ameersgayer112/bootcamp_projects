
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
        let checkCityinDB = this.cityData.find(city => city.name === cityName)
        const newCity = await $.ajax({
            url: "/city",
            type: 'POST',
            data: checkCityinDB

        })
        console.log(`${newCity.name} Saved successfuly to DB `)
    }

    async removeCity(cityName) {
        const checkdelete = await $.ajax({
            type: "DELETE",
            url: `/city/${cityName}`,
        });

        


        const index = this.cityData.findIndex(city => city.name === cityName)
        this.cityData.splice(index, 1)
    }

}



