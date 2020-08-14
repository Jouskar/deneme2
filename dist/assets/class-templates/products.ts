export class Products {

    code: string;
    quantity: number;
    price: number;
    discounts: number[];

    constructor() {
        this.code = "";
        this.quantity = 1;
        this.price = null;
        this.discounts = [];
    }
    
}