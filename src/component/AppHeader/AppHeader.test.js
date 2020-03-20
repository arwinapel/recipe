import React from "react";
import {render, cleanup, fireEvent, wait} from "@testing-library/react";
import AppHeader from "./AppHeader";
import {successIngredients, TOMORROW} from "../../AppConstTest";
import axiosMock from "axios";
import {URL_INGREDIENTS} from "../../AppConst";

jest.mock('axios');

const appHeader = {
    selectedDate: new Date("03/20/2020"),
    handleDateChange: jest.fn(),
    getIngredients: jest.fn()
};

describe("AppHeader", () => {
    beforeEach(cleanup);

    it("renders input date, value, onChange", () => {
        const {getByTestId} = render(<AppHeader {...appHeader} />);
        const inputDate = getByTestId('input-date');
        expect(inputDate).toBeInTheDocument();
        expect(new Date(inputDate.value).toDateString()).toBe(new Date().toDateString());
        fireEvent.change(inputDate, {target: {value: TOMORROW}})
        expect(inputDate.value).toBe(TOMORROW)
    });

    it("render get ingredients button and function click", async () => {
        const {getByTestId, asFragment} = render(<AppHeader {...appHeader} />)
        const getIngredientBtn = getByTestId('check-ingredient-btn');
        expect(getIngredientBtn).toBeInTheDocument();
        fireEvent.click(getIngredientBtn);
        expect(appHeader.getIngredients).toHaveBeenCalledTimes(1);
    });
})