import React from "react";
import PropTypes from "prop-types";
import Ingredient from "../Ingredient/Ingredient";
import './Ingredients.css';
import List from '@material-ui/core/List';

function Ingredients({data, selectedData, addIngredient}) {
    const ingredients = data.map((el, idx) => (
        <Ingredient
            key={idx}
            selected={selectedData.includes(el.title)}
            title={el.title}
            useBy={el['use-by']}
            addIngredient={addIngredient}
        />
    ));

    return (
        <List
            dense
            disablePadding
            className={"ingredients-container"}
        >
            {ingredients}
        </List>
    )
}

Ingredients.propTypes = {
    data: PropTypes.array.isRequired,
    selectedData: PropTypes.array.isRequired,
    addIngredient: PropTypes.func.isRequired,
};

export default Ingredients