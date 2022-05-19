class Renderer{
    constructor(allCityData){
        this.allCityData = allCityData
    }

    renderData(allCityData ){

        const allCities = allCityData

        $('#cities').empty()
        const city = $("#city-template").html();
        const cityTemplate = Handlebars.compile(city)
        let cityNewHtml = cityTemplate({allCities});
        $("#cities").append(cityNewHtml);

    }
}