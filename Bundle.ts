import { Cake } from "./Cake";
    
export class Bundle {
    private cakes: Cake[] = [];
    private bundles: Bundle[] = [];
    private total: number;

    addCake(cake: Cake) {
        this.cakes.push(cake)
    }
    addBundle(bundle: Bundle) {
        
        this.bundles.push(bundle)
    }
    getBundlePrice(): number {
        let sum = 0;
        for (let index = 0; index < this.cakes.length; index++) {
            sum += this.cakes[index].getPrice();                
        }
        return sum;
    }
    getBundlesPrice(): number {
        let sum = 0;
        for (let i = 0; i < this.bundles.length; i++) {
            sum += this.bundles[i].getBundlePrice();
        }
        return sum;
    }
    getCakesQuantity() : number {
        return this.cakes.length;
    }
}