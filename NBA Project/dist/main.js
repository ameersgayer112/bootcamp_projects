




$("button").on('click', function () {
    const input = $("#teamName").val()
    $.get(`http://data.nba.net/10s/prod/v1/2018/players.json`, function (data) {
        // const rendering = new Renderer(data)
        // rendering.loadPlayers()
        console.log(data)
    })

    // $.ajax({
    //     method: "GET",
    //     url: `team/${input}`,
    //     success : (data)=> {
    //         console.log(data)
    //         const rendering = new Renderer(data)
    //         rendering.loadPlayers()
    //     },
    //     error: (xhr, text, error) => {
    //         console.log(text);
    //       },
    // })
})