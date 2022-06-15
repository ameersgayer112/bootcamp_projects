import React, { Component } from "react";
import Transcation from "./Transcation";

class Categories extends Component {

    getCategories = () => {
        const categories = {};
        for (let action in this.props.actions) {
            let category = action.category.toLowerCase();
            if (categories[category]) {
                categories[category].sum =
                    categories[category].sum + action.amount;
            } else {
                categories[category] = { sum: action.amount };
            }
        }
        return categories;
    }
    render() {
        const categories = this.getCategories();
        const categoriesObjects = Object.entries(categories)
        return(
            <div>
                {categoriesObjects.map((category,i) => {return (
                    <div key={i}>
                        <h4>{i}</h4>
                        <br></br>
                        <h4>{category[0]}</h4>
                        <br></br>
                        <h4>{category[1].sum}</h4>
                        <br></br>

                    </div>
                )})}
            </div>
        )
    }
}


export default Categories