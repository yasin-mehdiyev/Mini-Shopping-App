import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

export default class Dashboard extends Component {
    render() {
        return ( 
            <Container>
            <Row>

            <Col xs = "3">
            <CategoryList/>
            </Col> 

            <Col xs = "9">
            <ProductList/>
            </Col> 

            </Row> 
            </Container>
        )
    }
}