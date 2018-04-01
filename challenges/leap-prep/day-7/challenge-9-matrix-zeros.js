function setZeroes(matrix) {
    let firstRowZero = false;
    let firstColumnZero = false;

    //set first row and column zero or not
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] == 0){
            firstColumnZero = true;
            break;
        }
    }

    for(let i = 0; i < matrix[0].length; i++){
        if(matrix[0][i] == 0){
            firstRowZero = true;
            break;
        }
    }

    //mark zeros on first row and column
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(matrix[i][j] == 0){
               matrix[i][0] = 0;
               matrix[0][j] = 0;
            }
        }
    }

    //use mark to set elements
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
               matrix[i][j] = 0;
            }
        }
    }

    //set first column and row
    if(firstColumnZero){
        for(let i = 0; i < matrix.length; i++)
            matrix[i][0] = 0;
    }

    if(firstRowZero){
        for(let i = 0; i < matrix[0].length; i++)
            matrix[0][i] = 0;
    }

}
