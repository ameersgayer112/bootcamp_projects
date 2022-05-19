
const renderer = new RendererMeal()


$("#searchBtn").on('click',function () {
    const input = $("#ingredientName").val()
    const didntLike = $("#didntlike").val()
    $.get(`/recipes/${input}/${didntLike}`, function (data) {
        renderer.loadMeals(data);
    })
})

$(".meals").on('click',"#pictmeal",function(){
    alert($(this).closest(".container").find("li:first-child").text())
})