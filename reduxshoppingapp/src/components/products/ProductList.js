import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';
import * as cartActions from '../../redux/actions/cartActions';
import alertify from 'alertifyjs';

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts()
    }

    addTocart=(product)=>{
        this.props.actions.addToCarts({quantity:1,product})
        alertify.success(product.productName+" added to cart",1)
    }

    render() {
        return (
            <div>
                <Badge color="warning" className="mr-2 mt-4">
                    Products
                </Badge>
                <Badge color="success">
                    {this.props.currentCategory.categoryName}
                </Badge>

                <Table className="mt-3 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice} AZN</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button color="success" onClick={()=>this.addTocart(product)}>
                                            Add
                                       </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
        carts: state.cartReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCarts:bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);