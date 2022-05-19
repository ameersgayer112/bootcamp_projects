const renderer = new Renderer()
const tempManager = new TempManager()

const loadPage = async function(){

    const allCityData  = await tempManager.getDataFromDB();
    renderer.renderData(allCityData)
}

const  handleSearch  = async function(cityInput){

    const cities = await tempManager.getCityData(cityInput)
    renderer.renderData(cities)

}

loadPage()

$('#searchbtn').on('click',function(){
    const cityInput = $('#cityinput').val()
    handleSearch(cityInput)
})

$('#savebtn').on('click',function(){
    const cityName = 'Miami'
    tempManager.saveCity(cityName)

})

$('#removebtn').on('click',function(){
    const cityName = 'Miami'
    tempManager.removeCity(cityName)
    
})