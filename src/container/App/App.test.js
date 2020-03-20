import React from 'react';
import {cleanup, render, fireEvent, wait, waitForElement} from '@testing-library/react';
import App from './App';
import axiosMock from 'axios';
import {URL_INGREDIENTS, URL_RECIPES} from "../../AppConst";
import {addIngredient, getRecipe, successIngredients, successRecipe, TOMORROW} from "../../AppConstTest";
import Ingredients from "../../component/Ingredients/Ingredients";

jest.mock('axios');


describe("App", () => {
    afterEach(cleanup);
    it("Renders input date, value, onChange", () => {
        const {asFragment, getByTestId} = render(<App/>);
        const inputDate = getByTestId('input-date');
        expect(inputDate).toBeInTheDocument();
        expect(new Date(inputDate.value).toDateString()).toBe(new Date().toDateString());
        fireEvent.change(inputDate, {target: {value: TOMORROW}})
        expect(inputDate.value).toBe(TOMORROW)
        expect(asFragment()).toMatchSnapshot();
    });

    it("Render child", async () => {
        const {asFragment, getAllByTestId, getByTestId, rerender, queryByText} = render(<App/>);

        const getIngredientBtn = getByTestId('check-ingredient-btn');
        expect(getIngredientBtn).toBeInTheDocument();

        axiosMock.get.mockResolvedValueOnce(successIngredients);
        fireEvent.click(getIngredientBtn);
        await wait();

        const ingredients = getAllByTestId('ingredient');
        expect(ingredients.length).toBe(2);
        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(axiosMock.get).toHaveBeenCalledWith(URL_INGREDIENTS);

        const btnGetRecipe = getByTestId('get-recipe-btn');
        fireEvent.click(btnGetRecipe);
        expect(btnGetRecipe).toBeInTheDocument();

        const checkedIngredient = getAllByTestId('checked-ingredient');
        expect(checkedIngredient[0]).not.toHaveClass("Mui-checked");

        fireEvent.click(btnGetRecipe);
        waitForElement(() => {
            expect(getByTestId('error-notif')).toHaveAttribute('data-open', "true")
        });

        fireEvent.click(ingredients[0]);
        expect(checkedIngredient[0]).toHaveClass('Mui-checked');
        axiosMock.get.mockResolvedValueOnce(successRecipe);
        fireEvent.click(btnGetRecipe);
        await wait();
        const listRecipe = getByTestId('list-recipe');
        const titleIngredients = getAllByTestId('title-ingredient');
        expect(axiosMock.get).toHaveBeenCalledWith(`${URL_RECIPES}?.ingredients=${titleIngredients[0].textContent}`);
        expect(listRecipe).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});