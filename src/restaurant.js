var arrayPedidos = [];

const createMenu = (menu) => ({
  fetchMenu: () => menu,
  consumption: arrayPedidos,
  order: (pedido) => {createMenu().consumption.push(pedido)},
  pay: () => {
    let pagamento = 0;
    createMenu().consumption.forEach((elemento) => {
      var food = Object.values(menu)[0]
      let drink = Object.values(menu)[1]
      
      if (elemento in food === true){
        pagamento += food[elemento]
      }
      if (elemento in drink === true){
        pagamento += drink[elemento]
      }
      
    })
    pagamento = pagamento*1.1
    return parseFloat(pagamento).toFixed(2)
  }
});

module.exports = createMenu;