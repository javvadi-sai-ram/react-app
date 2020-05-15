import React from "react";
import productListResponse from "../fixtures/productListResponse.json"

let products=[...productListResponse]


let sortAscending=products.sort((a,b)=>a.price-b.price);
let sortDecending=products.sort((a,b)=>b.price-a.price);


export {sortAscending,sortDecending};