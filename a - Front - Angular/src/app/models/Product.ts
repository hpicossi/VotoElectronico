
//import { Byte } from "@angular/compiler/src/util"

import { CategoriaService } from "../services/categoria.service";
import { Categoria } from "./Categoria";

export class Product {
    id : string="";
    name : string="";
    description : string="";
    price : Number=0;
    addedOn : Date=new Date();
    image : Blob = new Blob();
    imageUrl : string="";
    category: Categoria = new Categoria();
}

// export class Product {
//     id : Number=0;
//     name : string="";
//     description : string="";
//     price : Number=0;
//     addedOn : Date=new Date();
//     image? :Blob=new Blob([]);
//     imageUrl : string="";
// }
