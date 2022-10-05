export class Cake {
    private name: string;
    private ingredient: string[];
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
}
