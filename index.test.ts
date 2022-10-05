import { Cake } from "./index";

test('The name function should return “cupcake”', () => {
    const cupcake = new Cake('cupcake')
    expect(cupcake.getName()).toBe("cupcake");
});

test('The name function should return “coockie”', () => {
    const coockie = new Cake('coockie')
    expect(coockie.getName()).toBe("coockie");
});

test('The name function should return "cupcake with chocolate”', () => {
    const cupcake = new Cake('cupcake', ['chocolate'])
    expect(cupcake.getName()).toBe("cupcake with chocolate");
});

test('The name function should return "coockie with chocolate”', () => {
    const coockie = new Cake('coockie', ['chocolate'])
    expect(coockie.getName()).toBe("coockie with chocolate");
});

test('The name function should return "coockie with chocolate and nuts”', () => {
    const coockie = new Cake('coockie', ['chocolate', 'nuts'])
    expect(coockie.getName()).toBe("coockie with chocolate and nuts");
});

test('The name function should return "coockie with nuts and chocolate', () => {
    const coockie = new Cake('coockie', ['nuts', 'chocolate'])
    expect(coockie.getName()).toBe("coockie with nuts and chocolate");
});