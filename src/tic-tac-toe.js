class TicTacToe {
    constructor() {
        this.player = 'x';
        this.matrix = [];
        for(let i = 0; i<3; i++) {
            this.matrix[i] = []; 
            for(let j = 0; j<3; j++) {
                this.matrix[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.player;
            this.player = (this.player === 'x')? 'o' : 'x';
        } 
    }

    isFinished() {
        if(this.isDraw() === true || this.getWinner() !== null)
            return true;
        return false;
    }

    getWinner() {
        for(let i = 0; i<3; i++) {
            if(this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2])
                return this.matrix[i][0]; 
        }
        for(let j = 0; j<3; j++) {
            if(this.matrix[0][j] === this.matrix[1][j] && this.matrix[0][j] === this.matrix[2][j])
                return this.matrix[0][j]; 
        }
        if(this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) 
            return this.matrix[0][0];
        if(this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0])
            return this.matrix[0][2];   
        return null;
    }

    noMoreTurns() {
        for(let i = 0; i<3; i++) {
            for(let j = 0; j<3; j++) {
                if(this.matrix[i][j] === null)
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() === false || this.getWinner() !== null)
            return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
