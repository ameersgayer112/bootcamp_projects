
class Renderer {
    constructor(data) {
      this.data = data;
    }

    loadPlayers(){
        const data = this.data;
        $("#player").empty()
        const player = $("#players-template").html()
        const playerTemplate = Handlebars.compile(player)
        const playerNewHtml = playerTemplate({NBAPlayers:data})
        $("#player").append(playerNewHtml)
    }
}