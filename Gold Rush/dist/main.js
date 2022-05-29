Handlebars.registerHelper("ifNoName", function (value) {
    return value === "";
});

Handlebars.registerHelper("ifCoin", function (value) {
    return value === "c";
});

Handlebars.registerHelper("ifPlayer1", function (value) {
    return value === 1;
});

Handlebars.registerHelper("ifPlayer2", function (value) {
    return value === 2;
});

let x = 10, y = 10;
const board1 = new GoldRush(x, y);
const renderer = new Renderer();



$(".startGame").on("click", function () {
    const board = new GoldRush(x, y);
    
    const player1 = $(".player1Name").val();
    const player2 = $(".player2Name").val();
    board.setNames(player1, player2);

  

    renderer.renderBoard(board);
    renderer.renderScores(board);

    $(document).keypress(function (e) {
        let text
        switch (e.which) {
            case 119:
                board.movePlayer(2, "up");
                renderer.renderBoard(board);
                break
            case 115:
                board.movePlayer(2, "down");
                renderer.renderBoard(board);
                break;
            case 97:
                board.movePlayer(2, "left");
                renderer.renderBoard(board);
                break;
            case 100:
                board.movePlayer(2, "right");
                renderer.renderBoard(board);
                break;
            default:
                text += "Wromg Key!!"

        }
        renderer.renderScores(board);
        board.checkWinner()
    });

    $(document).keydown(function (e) {
        let text
        switch (e.which) {
            case 38:
                board.movePlayer(1, "up");
                renderer.renderBoard(board);
                break
            case 40:
                board.movePlayer(1, "down");
                renderer.renderBoard(board);
                break;
            case 37:
                board.movePlayer(1, "left");
                renderer.renderBoard(board);
                break;
            case 39:
                board.movePlayer(1, "right");
                renderer.renderBoard(board);
                break;
            default:
                text += "Wromg Key!!"

        }
        renderer.renderScores(board);
        board.checkWinner()
    });
});