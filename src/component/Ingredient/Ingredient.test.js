import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Ingredient from "./Ingredient";
import {addIngredient, ingredient} from "../../AppConstTest";

describe("Ingredient", () => {
    beforeEach(cleanup);
    it("Render correctly", () => {
        const {getByTestId} = render(<Ingredient {...ingredient}/>);
        expect(getByTestId('title-ingredient').textContent).toBe(ingredient.title);
        expect(getByTestId('useby-ingredient').textContent).toBe(ingredient.useBy);
    })

    it("Clicked", () => {
        const {getByTestId} = render(<Ingredient {...ingredient}/>)
        fireEvent.click(getByTestId('ingredient'));
        expect(addIngredient).toHaveBeenCalledTimes(1);
    });
});