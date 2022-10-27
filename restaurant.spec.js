const { default: expect } = require('expect');
const createMenu = require('./src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    let objetoQualquer = { food: {}, drink: {} }
    let objetoRetornado = createMenu(objetoQualquer);
    expect(typeof objetoRetornado.fetchMenu).toBe('function');
    expect(objetoRetornado.fetchMenu()).toBe(objetoQualquer);
    expect(objetoRetornado.fetchMenu()).toEqual(objetoQualquer);
    expect(objetoRetornado.consumption).toEqual([]);

    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);

    objetoQualquer = {
      food: { coxinha: 3.90, sanduiche: 9.90 },
      drinks: { agua: 2.90, cerveja: 6.90 },
    }
    objetoRetornado = createMenu(objetoQualquer);
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'coxinha', 'agua', 'agua', 'coxinha']);
    expect(objetoRetornado.pay()).toBe('19.25');

  });
});
