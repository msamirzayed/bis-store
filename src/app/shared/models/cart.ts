import { ShoppingCartItem } from './cart-item';
import { Product } from './product';

export class ShoppingCart {


    items: ShoppingCartItem[] = [];



    constructor(public itemsMap: { [productId: string]: ShoppingCartItem}) {
        this.itemsMap = itemsMap || {};


        for (let productId in itemsMap) {

            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }
    }



    get totalItemsCount(): number {
        let count = 0;

        for ( let productId in this.itemsMap) {
            count += this.itemsMap[productId].quantity;
        }
        return count;
    }

    get totalPrice(): number {
        let sum = 0;

        for ( let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;

    }

}
