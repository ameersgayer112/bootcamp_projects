const renderer = Renderer()




$("button").on('click',function () {
    const input = $("#teamName").val()
    $.get(`/teams/${input}`, function (data) {
        renderer.render(data);
    })
})