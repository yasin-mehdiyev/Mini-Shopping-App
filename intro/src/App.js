import React, { Component } from 'react';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import alertify from'alertifyjs';
import { Switch, Route } from 'react-router-dom';
import CartDetails from './CartDetails';
import NotFound from './NotFound';

class App extends Component{

  state = {currentCategory:"",products:[],cart:[]};
  
  //To Call of GetProduct Method 
  componentDidMount(){
    this.getProducts();
  }

  //AddToBucket of Product information Operation 
  addToCart=(product)=>{
    let newItem=this.state.cart;
    let isAddItem=newItem.find(c=>c.product.id===product.id);

    //Checking Operation
    if(isAddItem){
       isAddItem.quantity+=1;
    }
    else{
      newItem.push({product:product,quantity:1});
    }

    this.setState({cart:newItem});

    alertify.success(product.productName + 'added to your bucket',1);

  }

  //RemoveFromBucket of Product information operation
  removeFromCart=(product)=>{
    let newItem=this.state.cart.filter(c=>c.product.id!==product.id);
    this.setState({cart:newItem});
  }

  //ChangeCategory Operation
  changeCategory = (category) => {
     this.setState({currentCategory:category.categoryName});
     this.getProducts(category.id);
  }

  //GetProduct From Api
  getProducts = (categoryId) => {
    let url="http://localhost:3000/products";
    if(categoryId){
       url+="?categoryId="+categoryId;
    }
    fetch(url)
    .then(resp=>resp.json())
    .then(resp=>this.setState({products:resp}))
  }


  render(){

  //Configuration of Variables (Explanation of Props)
  let infoProduct = {title:"Product"};
  let infoCategory = {title:"Category"};
  let titleOfCartDetails = {title:"Basket Details"};

    return (

      <div>
          <Container>

            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>

              <Row>
                  <Col xs="3">
                    <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={infoCategory}/>
                  </Col>
                  <Col xs="9">
                    <Switch>
                      <Route exact path="/" render={props=>(
                           <ProductList 
                            {...props}
                            addToCart={this.addToCart} 
                            products={this.state.products} 
                            currentCategory={this.state.currentCategory} 
                            changeCategory={this.changeCategory} 
                            info={infoProduct}/>
                      )}/>

                      <Route exact path="/cart" render={props=>(
                          <CartDetails 
                            {...props}
                            removeFromCart={this.removeFromCart} 
                            cart={this.state.cart}
                            titleOfCartDetails={titleOfCartDetails}  />
                      )}/>

                      <Route component={NotFound}/>

                    </Switch>
                    
                  </Col>
              </Row>
          </Container>
      </div>
 
     );
  }

}

export default App;