// import { Product } from "./Product.model"

// export class CartItem {
//     addedOn : Date
//     quantity : number
//     product : Product
//     totalPrice : Number
// }

import { Product } from "./Product";
export class CartItem {
    addedOn : Date=new Date();
    quantity : number=0;
    product : Product=new Product();
    totalPrice : Number=0;
}
