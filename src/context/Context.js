import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";

const Cart= createContext();


const Context =({children})=>{
  const products=  [
   {
       id: 1,
       title: "iPhone 9",
       description: "An apple mobile which is nothing like apple",
       price: 549,
       discountPercentage: 12.96,
       rating: 4.69,
       stock: 10,
       brand: "Apple",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
       images: "https://i.dummyjson.com/data/products/1/3.jpg",
                
   },
   {
       id: 2,
       title: "iPhone X",
       description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display ",
       price: 899,
       discountPercentage: 17.94,
       rating: 4.44,
       stock: 10,
       brand: "Apple",
       category: "smartphones",
       thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
       images: "https://i.dummyjson.com/data/products/2/3.jpg",
           
   },
   {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 10,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images:  "https://i.dummyjson.com/data/products/3/1.jpg"
    
},
{
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 10,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: "https://i.dummyjson.com/data/products/4/1.jpg"
        
    
},
{
    id: 5,
    title: "Huawei P30",
    description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany .",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 10,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images:  "https://i.dummyjson.com/data/products/5/1.jpg"
        
    
}
  
]


    const [state, dispatch] = useReducer(cartReducer,{
      products:products,
      cart:[]
    })


   return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
};

export default Context;

export const CartState=()=>{
   return useContext(Cart)
}