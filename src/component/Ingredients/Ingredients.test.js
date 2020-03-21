import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Ingredients from "./Ingredients";
import {addIngredient, ingredient, successIngredients} from "../../AppConstTest";

describe("Ingredients", () => {
    afterEach(cleanup)

    it("Render ingredients", () => {
        const {asFragment, getAllByTestId} = render(
            <Ingredients
                data={successIngredients.data}
                selectedData={[]}
                addIngredient={addIngredient}
            />
        );
        const resultIngredients = getAllByTestId('ingredient').map(ingredient => ingredient.textContent);
        expect(resultIngredients.length).toBe(2);
        expect(asFragment).toMatchSnapshot();
    });

    it("Check disabled list", () => {
        const {getAllByTestId} = render(
            <Ingredients
                data={successIngredients.data}
                selectedData={[]}
                addIngredient={addIngredient}
            />
        );
        const ingredients = getAllByTestId('ingredient');
        expect(ingredients[1]).toHaveClass("Mui-disabled");
    });

    it("Check not disabled list", () => {
        const {getAllByTestId} = render(
            <Ingredients
                data={successIngredients.data}
                selectedData={[]}
                addIngredient={addIngredient}
            />
        );
        const ingredients = getAllByTestId('ingredient');
        expect(ingredients[0]).not.toHaveClass("Mui-disabled");
    });
});