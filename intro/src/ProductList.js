import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';

class ProductList extends Component {

    render() {
        return (
            <div>
                <h3 className="mt-3 ml-2">{this.props.info.title} {this.props.currentCategory}</h3>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product =>(
                                <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                 <Button onClick={()=>this.props.addToCart(product)} color="info">add</Button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductList;
