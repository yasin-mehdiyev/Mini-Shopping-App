import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class CategoryList extends Component {

    //Declaration of props and state(Explanation of props&state)
    constructor(props){
        super(props);
        this.state={categories:[]};
    }

    componentDidMount(){
        this.getCategories();
    }

    
    getCategories=()=>{
        fetch("http://localhost:3000/categories")
         .then(resp=>resp.json())
         .then(resp=>this.setState({categories:resp}))
    }

    render() {
        return (
            <div className="mt-5">
                {/* Explanation of props */}
                <h3 className="ml-2">{this.props.info.title}</h3>
                <ListGroup className="mt-3">
                    {/* Explanation of state and map function */}
                    {
                        this.state.categories.map(category=>(
                        <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} key={category.id} onClick={()=>this.props.changeCategory(category)}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;
