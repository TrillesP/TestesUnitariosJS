const productDetails = require('./src/productDetails');


describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toEqual('function');
    expect(Array.isArray(productDetails())).toBeTruthy();
    expect(productDetails()).toHaveLength(2);
    expect(typeof productDetails()).toEqual('object');
  
    let obj1 =  [
      {
        name: 'banana',
        details: {
          productId: 'banana123'
        }
      },
      {
        name: 'abacaxi',
        details: {
          productId: 'abacaxi123'
        }
      }
    ]
    expect(productDetails('banana', 'abacaxi')).toEqual(obj1);
    
    let obj2 = [
      {
        name: undefined,
        details: {
          productId: 'undefined123'
        }
      },
      {
        name: undefined,
        details: {
          productId: 'undefined123'
        }
      }
    ]
    expect(productDetails()).toEqual(obj2);
  });
});
