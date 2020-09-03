import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css'




export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
    Products:{
      Vegetable:{
      Img:["./Images/oranges.jpg"],
     Type:["Fruits","Vegetables"],
      Name:["Oranges","Melon","Apples","Mango","Thorn melon","Bananas","Onions","Spinach","Tomatoes","Carrots","Kales","Broccoli"],
      Quantity:[100,170,190,300,500,200,150],
      Price:[35,40,70,50,60,45,55,70],
    
   
}
}
    };
  
render();{
this.state.Products.Vegetable.map((Veg)=>{
  return(
    <div>
           
           <p className="veges"></p>
           <p>Image{Veg.Img}</p>
           <p>Name{Veg.Name}</p>
           <p>Type:{this.Veg.type[0]}</p>
           <p>Quantity: {this.Veg.quantity[0]}</p>
          <p>Price: {this.Veg.price[0]}</p>
        </div>
  );
}
)
}
  }
}