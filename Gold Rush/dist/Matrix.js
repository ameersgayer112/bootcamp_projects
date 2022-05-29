/* Write your code below */

class Matrix {
    constructor(rowsLength, colmonsLength) {
        this.rowsLength = rowsLength;
        this.colmonsLength = colmonsLength;
        this.myMatrix = this.generateMatrix(rowsLength,colmonsLength)
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.myMatrix.length; i++) {
            let strLine = ""
            for (let j = 0; j < this.myMatrix[i].length; j++) {
                strLine += this.myMatrix[i][j] + '\t'
            }
            console.log(strLine)
        }


    }
    get(rowNum, colNum) {
        return this.myMatrix[rowNum][colNum]
    }

    alter(rowNum, colNum, value) {
        this.myMatrix[rowNum][colNum] = value
    }

    printColumn(colNum) {
        let line = ""
        for (let i = 0; i < this.myMatrix.length; i++) {
            line += this.myMatrix[i][colNum] + '\t'

        }
        console.log(line)
    }

    printRow(rowNum) {
        let line = ""
        for (let i = 0; i < this.myMatrix[rowNum].length; i++) {
            line += this.myMatrix[rowNum][i] + '\t'
        }
        console.log(line)
    }

    findCoordinate(value) {
        let coordinate = {}
        let check = false
        for (let i = 0; i < this.myMatrix.length; i++) {
            for (let j = 0; j < this.myMatrix[i].length; j++) {
                if(this.myMatrix[i][j] === value && !check){
                    coordinate.x = j;
                    coordinate.y = i;
                    check = true
                }

            }
        }
        return coordinate
    }


}




//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

//ex2
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}



/* Do not remove the exports below */
//module.exports = Matrix