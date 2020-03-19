import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import App from './App';

const date = new Date();
const tomorrowDate = new Date(date);
tomorrowDate.setDate(tomorrowDate.getDate() + 1)
const tomorrow = `${tomorrowDate.getMonth() < 10 ? `0${tomorrowDate.getMonth() + 1}` : `${tomorrowDate.getMonth() + 1}`}/${tomorrowDate.getDate()}/${tomorrowDate.getFullYear()}`;

describe("App", () => {
    beforeEach(cleanup);
    it("renders input date, value, onChange", () => {
        const {getByTestId} = render(<App/>);
        const inputDate = getByTestId('input-date');
        expect(inputDate).toBeInTheDocument();
        expect(new Date(inputDate.value).toDateString()).toBe(new Date().toDateString());
        fireEvent.change(inputDate, {target: {value: tomorrow}})
        expect(inputDate.value).toBe(tomorrow)
    });

    // it("render button and function click", () => {
    //     const {getByTestId} = render(<App/>)
    //     const getIngredientBtn = getByTestId('check-ingredient-btn');
    //     expect(getIngredientBtn).toBeInTheDocument();
    // })
});
