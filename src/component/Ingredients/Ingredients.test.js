import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import Ingredients from "./Ingredients";
import {addIngredient, getRecipe, successIngredients} from "../../AppConstTest";

describe("Ingredients", () => {
    afterEach(cleanup)

    it("Render ingredients", () => {
        const {asFragment, getAllByTestId} = render(<Ingredients data={successIngredients.data}
                                                                 selectedData={[]}
                                                                 addIngredient={addIngredient}/>);
        const resultIngredients = getAllByTestId('ingredient').map(ingredient => ingredient.textContent);
        expect(resultIngredients.length).toBe(2);
        expect(asFragment).toMatchSnapshot();
    });
});