import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import RecipeList from "./RecipeList";
import {successRecipe} from "../../AppConstTest";

describe("Recipe", () => {
    afterEach(cleanup)

    describe("Render", () => {
        it("Render Correctly", () => {
            const {getByTestId} = render(<RecipeList data={successRecipe.data}/>)
            expect(getByTestId('list-recipe')).toBeInTheDocument()
        })
        it("Click expand panel", () => {
            const {getAllByTestId} = render(<RecipeList data={successRecipe.data}/>)
            const panel = getAllByTestId('expand-panel')
            fireEvent.change(panel[0], {target: {isExpanded: true}})
            panel[0].expanded = successRecipe.data[0]
            expect(panel[0].expanded).toBe(successRecipe.data[0])
        })
    })
});