import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Fruits","Fruits","Fruits","Fruits","Fruits","Fruits","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables","Vegetables"],
      name:["Apples","Grapes","Berries","Quavas","Oranges","Avocados","Bananas","Pawpaw","Tomatoes","Onionss","Beet roots","Carrots","Cucumber","Brocollis","Kales","Spinach"],
      quantity:[15,20,10,30,40,30,35,45,50,55,70,65,70,80,75,80],
      price:[350,300,250,150,360,200,130,125,245,180,165,180,135,190,235,260]
    };
  }
  render(){
    return(
      <div className="container">
       <h1 className="cont"> Grocery Store</h1>
       <h1 className="conta"> Vegetables and Fruits </h1>
       <div className="flex">
         <div>
           <img src='./Images/Apple0.jpg' width="300" height="300"/>
           <p className="para">
           <p>Name: {this.state.name[0]}</p>
           <p>Type:{this.state.type[0]}</p>
           <p>Quantity: {this.state.quantity[3]}</p>
          <p>Price: {this.state.price[0]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Grape0.jpg' width="300" height="300"/>
           <p className="para">
           <p> Name:{this.state.name[1]}</p> 
           <p>Type:{this.state.type[1]}</p> 
           <p>Quantity:{this.state.quantity[1]}</p>
           <p>Price: {this.state.price[1]}</p>
           </p>
        </div>
        <div>  
          <img src='./Images/Berry0.png' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[2]}</p>
          <p>Type:{this.state.type[2]}</p>
          <p>Quantity:{this.state.quantity[2]}</p>   
          <p>Price: {this.state.price[2]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Quava0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[3]}</p>
          <p>Type:{this.state.type[3]}</p>
          <p>Quantity:{this.state.quantity[3]}</p>   
          <p>Price: {this.state.price[3]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Orange.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[4]}</p>
          <p>Type:{this.state.type[4]}</p>
          <p>Quantity:{this.state.quantity[4]}</p>   
          <p>Price: {this.state.price[4]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Avocado0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[5]}</p>
          <p>Type:{this.state.type[5]}</p>
          <p>Quantity:{this.state.quantity[5]}</p>   
          <p>Price: {this.state.price[5]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Banana0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[6]}</p>
          <p>Type:{this.state.type[6]}</p>
          <p>Quantity:{this.state.quantity[6]}</p>   
          <p>Price: {this.state.price[6]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Pawpaw0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[7]}</p>
          <p>Type:{this.state.type[7]}</p>
          <p>Quantity:{this.state.quantity[7]}</p>   
          <p>Price: {this.state.price[7]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Tomato 2.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[8]}</p>
          <p>Type:{this.state.type[8]}</p>
          <p>Quantity:{this.state.quantity[2]}</p>   
          <p>Price: {this.state.price[8]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Onion0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[9]}</p>
          <p>Type:{this.state.type[9]}</p>
          <p>Quantity:{this.state.quantity[9]}</p>   
          <p>Price: {this.state.price[9]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Beet root0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[10]}</p>
          <p>Type:{this.state.type[10]}</p>
          <p>Quantity:{this.state.quantity[10]}</p>   
          <p>Price: {this.state.price[10]}</p>
          </p>
        </div>     
        <div>
          <img src='./Images/Carrot0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[3]}</p>
          <p>Type:{this.state.type[11]}</p>
          <p>Quantity:{this.state.quantity[11]}</p>   
          <p>Price: {this.state.price[11]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Cucumber0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[12]}</p>
          <p>Type:{this.state.type[12]}</p>
          <p>Quantity:{this.state.quantity[12]}</p>   
          <p>Price: {this.state.price[12]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Brocolli0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[13]}</p>
          <p>Type:{this.state.type[13]}</p>
          <p>Quantity:{this.state.quantity[13]}</p>   
          <p>Price: {this.state.price[13]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Kales 0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[14]}</p>
          <p>Type:{this.state.type[14]}</p>
          <p>Quantity:{this.state.quantity[14]}</p>   
          <p>Price: {this.state.price[14]}</p>
          </p>
        </div>
        <div>
          <img src='./Images/Spinach0.jpg' width="300" height="300"/>
          <p className="para">
          <p>Name:{this.state.name[15]}</p>
          <p>Type:{this.state.type[15]}</p>
          <p>Quantity:{this.state.quantity[15]}</p>   
          <p>Price: {this.state.price[15]}</p>
          </p>
        </div>
       </div>
       </div>
    );
    } 

  }

  ReactDOM.render(
    <React.StrictMode>
      <Products />
    </React.StrictMode>,
    document.getElementById('root')
  );



  