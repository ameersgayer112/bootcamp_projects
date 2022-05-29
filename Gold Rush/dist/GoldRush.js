//const Matrix = require('./Matrix')

class GoldRush extends Matrix {

    constructor(rowsLength,colmonsLength) {
        super(rowsLength,colmonsLength);
        this.coins = 0
        this.player1 = { x: 0, y: 0, score: 0, myTurn: true, playerNumber: 1}
        this.player2 = { x: this.colmonsLength - 1, y: this.rowsLength - 1, score: 0, myTurn: true, playerNumber: 2 }
        this.coinsPersent = {
            c: 40,
            n: 25
        }
        this.winner=""
        this.myMatrix = this.createBoradMatrix(rowsLength, colmonsLength);
    }

    createBoradMatrix(rowsLength, colmonsLength) {
        this.myMatrix = []
        for (let r = 0; r < rowsLength; r++) {
            this.myMatrix.push([])
            for (let c = 0; c < colmonsLength; c++) {
                this.myMatrix[r].push(this.randomCoins(r, c))
            }
        }
        this.alter(0, 0, 1)
        this.alter(rowsLength - 1, colmonsLength -1, 2)
        return this.myMatrix;

    }

    randomCoins(rowNum, colNum) {
        let number = Math.random() * 100;
        let cell = '.';

        if (number < this.coinsPersent.c) {
            this.coins += 10;
            if (this.myMatrix[rowNum][colNum] !== 1 || this.myMatrix[rowNum][colNum] !== 2 && this.myMatrix[rowNum][colNum] !== "c") {
                cell = "c"
            }
        } else if (number < this.coinsPersent.c + this.coinsPersent.n) {
            if (this.myMatrix[rowNum][colNum] !== 1 || this.myMatrix[rowNum][colNum] !== 2 && this.myMatrix[rowNum][colNum] !== "c") {
                cell = "."
            }
        }

        return cell
    }

    setNames(player1Name,player2Name){
        this.player1.player1Name = player1Name
        this.player2.player2Name = player2Name
    }

    checkWinner(){
        if(this.player1.score > this.coins/2){
            this.winner = this.player1.player1Name
        }else if(this.player2.score > this.coins/2) {
            this.winner = this.player2.player2Name
        }else{
            this.winner = ""
        }
    }



    movePlayer(playerNumber, direction) {
        let text = ""
        let coordinate = this.findCoordinate(playerNumber)
        switch (direction) {
            case "down":

                if (coordinate.y + 1 <= this.rowsLength) {
                    if(this.get(coordinate.y + 1,coordinate.x) === 'c'){
                        if(playerNumber === 1){
                            this.player1.score = this.player1.score + 10
                        }else{
                            this.player2.score = this.player2.score + 10
                        }
                    }
                    this.alter(coordinate.y, coordinate.x, '.')
                    this.alter(coordinate.y + 1, coordinate.x, playerNumber)

                }
                break;
            case "up":

                if (coordinate.y - 1 >= 0) {
                    if(this.get(coordinate.y - 1,coordinate.x) === 'c'){
                        if(playerNumber === 1){
                            this.player1.score += 10
                        }else{
                            this.player2.score += 10
                        }
                    }
                    super.alter(coordinate.y, coordinate.x, '.')
                    super.alter(coordinate.y - 1, coordinate.x, playerNumber)
                }
                break;
            case "right":

                if (coordinate.x + 1 <= this.colmonsLength) {
                    if(this.get(coordinate.y,coordinate.x + 1) === 'c'){
                        if(playerNumber === 1){
                            this.player1.score += 10
                        }else{
                            this.player2.score += 10
                        }
                    }
                    super.alter(coordinate.y, coordinate.x, '.')
                    super.alter(coordinate.y, coordinate.x + 1, playerNumber)
                }
                break;
            case "left":

                if (coordinate.x - 1 >= 0) {
                    if(this.get(coordinate.y,coordinate.x - 1) === 'c'){
                        if(playerNumber === 1){
                            this.player1.score += 10
                        }else{
                            this.player2.score += 10
                        }
                    }
                    super.alter(coordinate.y, coordinate.x, '.')
                    super.alter(coordinate.y, coordinate.x - 1, playerNumber)
                }
                break;
            default:
                text = "Wrong Key!!!!"

        }
    }

}

const board = new GoldRush(5,5)
board.print()
console.log("-----------------------------------------------")
board.movePlayer(1, "down")
board.print()
console.log("-----------------------------------------------")
board.movePlayer(1, "up")
board.print()
console.log("-----------------------------------------------")
board.movePlayer(1, "right")
board.print()
console.log("-----------------------------------------------")
board.movePlayer(2, "left")
board.print()

