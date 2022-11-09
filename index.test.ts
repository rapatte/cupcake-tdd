import { Bundle } from "./Bundle";
import { Cake } from "./Cake";

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
test('We can build a Bundle with 1 Cupcake and check quantity', () => {
    const cupcake = new Cake('cupcake');
    const bundle = new Bundle();
    bundle.addCake(cupcake);
    expect(bundle.getCakesQuantity()).toBe(1);
});
test('We can build a Bundle with 1 Cupcake and check price', () => {
    const cupcake = new Cake('cupcake');
    const bundle = new Bundle();
    bundle.addCake(cupcake);
    expect(bundle.getBundlePrice()).toBe(1);
});
test('We can build a Bundle with 1 Cupcake and 1 Cookie and check price', () => {
    const cupcake = new Cake('cupcake');
    const cookie = new Cake('coockie');
    const bundle = new Bundle();
    bundle.addCake(cupcake);
    bundle.addCake(cookie);
    expect(bundle.getBundlePrice()).toBe(3);
});
test('We can build a Bundle with 2 Cupcake and 1 Cookie and check price', () => {
    const cupcake1 = new Cake('cupcake');
    const cupcake2 = new Cake('cupcake');
    const cookie = new Cake('coockie');
    const bundle = new Bundle();
    bundle.addCake(cupcake1);
    bundle.addCake(cupcake2);
    bundle.addCake(cookie);
    expect(bundle.getBundlePrice()).toBe(4)
})
test('We can build a bundle with 1 bundle of 2 cookies and 1 Cupcake and check price', () => {
    const mainBundle = new Bundle();
    const bundle = new Bundle();
    const cookie1 = new Cake('coockie');
    const cookie2 = new Cake('coockie');
    const cupcake = new Cake('cupcake');
    bundle.addCake(cookie1);
    bundle.addCake(cupcake);
    bundle.addCake(cookie2);
    mainBundle.addBundle(bundle);       
    expect(mainBundle.getBundlePrice()).toBe(5);
})
test('We can build a bundle with many bundle of bundle and many cakes and check price', () => {
    const mainBundle = new Bundle();
    const subBundle1 = new Bundle();
    const subBundle2 = new Bundle();

    const bundle1 = new Bundle();
    const bundle2 = new Bundle();
    const bundle3 = new Bundle();
    const bundle4 = new Bundle();

    const cookie1 = new Cake('coockie');
    const cookie2 = new Cake('coockie');
    const cupcake1 = new Cake('cupcake');
    const cupcake2 = new Cake('cupcake');

    bundle1.addCake(cookie1);
    bundle2.addCake(cookie2);
    bundle3.addCake(cupcake1);
    bundle4.addCake(cupcake2);

    subBundle1.addBundle(bundle1);
    subBundle1.addBundle(bundle2);
    subBundle2.addBundle(bundle3);
    subBundle2.addBundle(bundle4);

    mainBundle.addBundle(subBundle1);       
    mainBundle.addBundle(subBundle2);

    expect(mainBundle.getBundlePrice()).toBe(6);
})