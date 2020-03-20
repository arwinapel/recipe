import React, {useState} from 'react';
import './App.css';
import AppHeader from "../../component/AppHeader/AppHeader";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import {URL_INGREDIENTS, URL_RECIPES} from "../../AppConst";
import Ingredients from "../../component/Ingredients/Ingredients";
import RecipeList from "../../component/RecipeList/RecipeList";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from '@material-ui/lab';

function App() {
    const [date, setDate] = useState(new Date());
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [error, setError] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const getIngredients = async () => {
        try {
            const result = await axios.get(URL_INGREDIENTS);
            setIngredients(result.data);
        } catch (e) {
            console.log(e);
        }
    };

    const addIngredient = (title) => {
        var dataSelected = [...selectedIngredients];
        if (selectedIngredients.includes(title)) {
            dataSelected = dataSelected.filter(el => el !== title);
        } else {
            dataSelected.push(title);
        }
        setSelectedIngredients(dataSelected);
    };

    const getRecipe = async () => {
        try {
            if (selectedIngredients.length === 0) throw new Error("No ingredient selected");
            const url = `${URL_RECIPES}?.ingredients=${selectedIngredients.join(",")}`;
            const result = await axios.get(url);
            setRecipe(result.data)
        } catch (e) {
            setError(e.message)
        }
    };

    return (
        <div className="App-container">
            <AppHeader selectedDate={date} handleDateChange={setDate} getIngredients={getIngredients}/>
            <Grid container className={'body-container'} spacing={1}>
                {
                    ingredients.length > 0 &&
                    [
                        <Grid item xs={12} key={"btn-recipe"}>
                            <Button
                                className={'btn-get-recipe'}
                                data-testid={"get-recipe-btn"}
                                variant={"contained"}
                                color={"primary"}
                                disableElevation
                                onClick={getRecipe}
                            >
                                Get Recipe
                            </Button>
                        </Grid>,
                        <Grid item xs={6} key={"ingredient-container"}>
                            <Ingredients
                                data={ingredients}
                                selectedData={selectedIngredients}
                                addIngredient={addIngredient}
                                getRecipe={getRecipe}
                            />
                        </Grid>
                    ]
                }
                {
                    recipe.length > 0 &&
                    <Grid item xs={6}>
                        <RecipeList data={recipe}/>
                    </Grid>
                }
            </Grid>
            <Snackbar
                data-testid={"error-notif"}
                data-open={Boolean(error)}
                anchorOrigin={{vertical: "top", horizontal: "center"}}
                open={Boolean(error)}
                autoHideDuration={3000}
                onClose={() => setError(null)}
            >
                <Alert elevation={6} variant="filled" onClose={() => setError(null)} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default App;
