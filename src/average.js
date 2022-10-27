const average = (lista) => {
    const naoNumeral = (lista) => lista.some(element => typeof element !== 'number')
    if (naoNumeral(lista) === true || lista.length === 0){
        return undefined
    }
    let total = 0;
    lista.forEach(element => total += element)
    return Math.round(total/lista.length)
}

module.exports = average;