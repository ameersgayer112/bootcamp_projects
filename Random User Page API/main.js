const apiManager = new APIManager()

let usersData = JSON.parse(localStorage.usersData || "[]")
let id = usersData.length

$("#load").on("click", function () {
    apiManager.loadData()
});

$("#display").on("click", function () {
    const rendering = new Renderer(apiManager.data)
    rendering.renderer()
});

$("#saveUserPage").on("click", function () {
    let usersData = JSON.parse(localStorage.usersData || "[]")
    let id = usersData.length
    usersData.push({ userId: id, apiManager })
    id++
    localStorage.usersData = JSON.stringify(usersData)
});

$("#loadUserPage").on("click", function () {
    const usersDataLastone = JSON.parse(localStorage.usersData || "[]")
    const lastUser = usersDataLastone[usersDataLastone.length - 1]
    const renderingLastone = new Renderer(lastUser.apiManager.data)
    renderingLastone.renderer()

});


$(function () {

    $(".dropdown-toggle").click(function () {
        $(this).next(".dropdown").slideToggle();
        $(".dropdown").empty();
        const usersDataLS2 = JSON.parse(localStorage.usersData || "[]");
        usersDataLS2.forEach((element) => {
            let adduser = `<li id="${element.id}"> <a href="#"> ${element.apiManager.data.mainUser.firstName} ${element.apiManager.data.mainUser.lastName}</a> </li>` 
            $(".dropdown").append(adduser);

            $(document).click(function (e) {
                var target = e.target;
                if (!$(target).is(".dropdown-toggle") && !$(target).parents().is(".dropdown-toggle")) {
                    $(".dropdown").slideUp();
                }
            });
        });
    });
});


$(".dropdown").on("click", "li", function () {
    const usersDataLSD3 = JSON.parse(localStorage.usersData || "[]");
    let processID = $(this).attr("id")
    const renderingLS = new Renderer(usersDataLSD3[processID].apiManager.data)
    renderingLS.renderer();

})