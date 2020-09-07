import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/catetegoryActions';
import { ListGroup, ListGroupItem,Badge } from 'reactstrap';
import * as productActions from '../../redux/actions/productActions';

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }

    selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id)
    }


    render() {
        return (
            <div>
                <Badge color="warning" className="mr-2 mt-4 mb-3">
                    Categories
                </Badge>
                <ListGroup>
                    {
                        this.props.categories.map(cat => (
                            <ListGroupItem
                                key={cat.id}
                                active={cat.id === this.props.currentCategory.id}
                                onClick={() => this.selectCategory(cat)}>
                                {cat.categoryName}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategoryItem, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);


