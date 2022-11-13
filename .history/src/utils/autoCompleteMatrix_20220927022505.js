export const autoCompleteMatrix = (col) => {
    let res = []
    for (let i = 1; i <= col; i++) {
        for (let j = 1; j <= col; j++) {
            res[i][j].push(1/i+j-1)
        }
    }
    return res
}