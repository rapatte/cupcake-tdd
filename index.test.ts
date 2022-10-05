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
test('The price function should return 1$ for "cupcake"', () => {
    const cupcake = new Cake('cupcake')
    expect(cupcake.getPrice()).toBe(1);
});
test('The price function should return 2$ for "coockie"', () => {
    const coockie = new Cake('coockie')
    expect(coockie.getPrice()).toBe(2);
});
test('The price function should return 1.1$ for "cupcake with chocolate"', () => {
    const cupcake = new Cake('cupcake', ["chocolate"])
    expect(cupcake.getPrice()).toBe(1.1);
});
test('The price function should return 2.1$ for "coockie with chocolate"', () => {
    const coockie = new Cake('coockie', ["chocolate"])
    expect(coockie.getPrice()).toBe(2.1);
});
test('The price function should return 2.2$ for "coockie with nuts"', () => {
    const coockie = new Cake('coockie', ["nuts"])
    expect(coockie.getPrice()).toBe(2.2);
});