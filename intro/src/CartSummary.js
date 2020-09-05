import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CartSummary extends Component {

    cartSummaryAdd(){
        return(
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Basket 
            </DropdownToggle>
            <DropdownMenu right>
                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge className="mr-2" color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                                Delete
                            </Badge>
                             {cartItem.product.productName} 
                             <Badge className="ml-2" color="success">
                                 {cartItem.quantity}
                             </Badge>
                        </DropdownItem>
                    ))
                }


                <DropdownItem divider />

                <DropdownItem>
                    <Link to="cart">Go to Basket Details</Link>
          </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        )
    }

    render() {
        return (
           <div>
               {this.props.cart.length>0?this.cartSummaryAdd():<div></div>}
           </div>
        )
    }
}
