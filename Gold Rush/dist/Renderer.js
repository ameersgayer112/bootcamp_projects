class Renderer {
    constructor(myMatrix) {
        this.myMatrix = myMatrix
    }

    renderBoard(myMatrix) {
        $(".martix-container").empty()
        const goldRushMatrix = $("#goldRush-template").html();
        const goldRushTemplate = Handlebars.compile(goldRushMatrix);
        let goldRushNewHTML = goldRushTemplate(myMatrix);
        $(".martix-container").append(goldRushNewHTML);
    }


    renderScores(myMatrix) {
        $(".scores").empty();
        const scores = $("#goldRushScores-template").html();
        const goldRushTemplateScores = Handlebars.compile(scores);
        let goldRushNewHTMLScores = goldRushTemplateScores(myMatrix);
        $(".scores").append(goldRushNewHTMLScores);
      }



}