import React, { Component } from 'react';
import {
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';

class CartSummary extends Component {

    removeFromCart=(product)=>{
       this.props.actions.removeFromCarts(product);
       alertify.error(product.productName+" removed from cart",1)
    }

    isCartEmpty() {
        return (
            <NavItem>
                <NavLink href="/components/">Cart is empty</NavLink>
            </NavItem>
        )
    }

    isCartSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                 </DropdownToggle>

                <DropdownMenu right>
                    {
                        this.props.carts.map(cartsItem => (
                            <DropdownItem>

                                <Badge color="danger" className="mr-1" onClick={()=>this.removeFromCart(cartsItem.product)}>
                                    X
                                </Badge>

                               <Badge color="success" className="mr-2">
                                  {cartsItem.product.productName}
                               </Badge>
                                   -
                               <Badge color="warning" className="ml-2 mr-2">
                                  {cartsItem.quantity}
                               </Badge>
                                   -
                               <Badge color="danger" className="ml-2">
                                   {cartsItem.quantity*cartsItem.product.unitPrice} AZN
                               </Badge>

                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />

                    <DropdownItem>
                        Cart Details
                   </DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {this.props.carts.length > 0 ? this.isCartSummary() : this.isCartEmpty()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        carts: state.cartReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCarts:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)