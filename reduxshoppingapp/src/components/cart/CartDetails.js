import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';
import { Alert, Badge, Table, Button } from 'reactstrap';

class CartDetails extends Component {

    removeFromCart = (product) => {
        this.props.actions.removeFromCarts(product);
        alertify.error(product.productName + " removed from cart", 1)
    }

    isEmptyDetails() {
        return (
            <Alert color="danger" className="text-center">
                Your Cart Details Page is Empty
            </Alert>
        )
    }

    isCartDetails() {
        return (
            <Table className="mt-3 text-center">
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Product Name</th>
                        <th>Quantity of product</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.carts.map(cartItems => (
                            <tr key={cartItems.product.id}>
                                <th scope="row">{cartItems.product.id}</th>
                                <td>{cartItems.product.productName}</td>
                                <td>{cartItems.quantity}</td>
                                <td>{cartItems.quantity * cartItems.product.unitPrice} AZN</td>
                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(cartItems.product)}>
                                        Delete
                                </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                <Badge color="success" className="mr-2 mt-4 mb-4">
                    Cart Details
                </Badge>

               {this.props.carts.length>0?this.isCartDetails():this.isEmptyDetails()}

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
            removeFromCarts: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails)
