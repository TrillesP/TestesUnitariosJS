const circle = require('./src/circle');


describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle('a')).toBeUndefined();
    expect(circle(2)).toEqual({radius: 2, area: 12.56, circumference: 12.56});
    expect(circle(2)).toMatchObject({radius: 2, area: 12.56, circumference: 12.56});
    expect(circle()).toBeUndefined();
    expect(circle(2).circumference).toEqual(12.56);
    expect(circle(3).area).toBeCloseTo(28.26);
    const raio3 = {radius: 3, area: 28.26, circumference: 18.84};
    expect(circle(3).radius).toEqual(raio3.radius);
    expect(circle(3).area).toBeCloseTo(raio3.area);
    expect(circle(3).circumference).toEqual(raio3.circumference);
  });
});