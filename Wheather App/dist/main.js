const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function () {

    const allCityData = await tempManager.getDataFromDB();
    renderer.renderData(allCityData)
}

const handleSearch = async function (cityInput) {

    const cities = await tempManager.getCityData(cityInput)
    renderer.renderData(cities)

}

loadPage()

$('#searchbtn').on('click', function () {
    const cityInput = $('#cityinput').val()
    handleSearch(cityInput)
})

$('#cities').on('click', '.savebtn', function () {
    const cityName = $(this).closest('.city').find('.CityName').text()
    tempManager.saveCity(cityName)

})


$('#cities').on('click', '.removebtn', async function () {
    const cityName = $(this).closest('.city').find('.CityName').text()
    tempManager.removeCity(cityName)
    const allCityData = await tempManager.getDataFromDB();
    renderer.renderData(allCityData)

})