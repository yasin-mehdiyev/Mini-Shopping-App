import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartDetails extends Component {
    render() {
        return (
            <div>
                <h3 className="mt-3 ml-2">{this.props.titleOfCartDetails.title}</h3>
                <Table bordered className="mt-4">
                    <thead>
                        <tr>
                            <th className="text-center">#Id</th>
                            <th className="text-center">Product Name</th>
                            <th className="text-center">Unit Price</th>
                            <th className="text-center">Units In Stock</th>
                            <th className="text-center">Quantity of Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(cartItem=>(
                                <tr key={cartItem.product.id}>
                                   <th scope="row">{cartItem.product.id}</th>
                                   <td>{cartItem.product.productName}</td>
                                   <td className="text-center">{cartItem.product.unitPrice} AZN</td>
                                   <td className="text-center">{cartItem.product.unitsInStock}</td>
                                   <td className="text-center">{cartItem.quantity}</td>
                                   <td>
                                       <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                                           Delete
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
