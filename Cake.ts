export class Cake {
    private name: string;
    private ingredient: string[];
    private price: number;
    constructor(name: string, ingredient?: string[]) {
        this.name = name;
        this.ingredient = ingredient;
    }
    getName() {
        if(this.ingredient && this.ingredient.length === 1) {
            return `${this.name} with ${this.ingredient[0]}`
        }
        if(this.ingredient && this.ingredient.length > 1) {
            return `${this.name} with ${this.ingredient[0]} and ${this.ingredient[1]}`
        }
        return this.name
    }

    getPrice(): number {

        if(this.name === "coockie" && this.ingredient && this.ingredient[0] === "nuts") {
            return 2.2;
        }
        if(this.name === "coockie" && this.ingredient && this.ingredient[0] === "chocolate") {
            return 2.1;
        }
        if(this.name === "cupcake" && this.ingredient && this.ingredient[0] === "chocolate") {
            return 1.1;
        }
        if(this.name === "coockie") {
            return 2;
        }

       return 1;
    }
}
