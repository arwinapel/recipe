const date = new Date();
const tomorrowDate = new Date(date);
tomorrowDate.setDate(tomorrowDate.getDate() + 1)
export const TOMORROW = `${tomorrowDate.getMonth() < 10 ? `0${tomorrowDate.getMonth() + 1}` : `${tomorrowDate.getMonth() + 1}`}/${tomorrowDate.getDate()}/${tomorrowDate.getFullYear()}`;
export const successIngredients = {
    data: [
        {
            "title": "Ham",
            "use-by": "2020-11-25"
        },
        {
            "title": "Cheese",
            "use-by": "2020-01-08"
        },
    ]
};
export const successRecipe = {
    data: [
        {
            "title": "Ham and Cheese Toastie",
            "ingredients": [
                "Ham",
                "Cheese",
                "Bread",
                "Butter"
            ]
        },
        {
            "title": "Salad",
            "ingredients": [
                "Lettuce",
                "Tomato",
                "Cucumber",
                "Beetroot",
                "Salad Dressing"
            ]
        },
        {
            "title": "Hotdog",
            "ingredients": [
                "Hotdog Bun",
                "Sausage",
                "Ketchup",
                "Mustard"
            ]
        }
    ]
};
export const addIngredient = jest.fn();
export const getRecipe = jest.fn();
export const ingredient = {
    title: 'Ham',
    useBy: '2019-12-12',
    addIngredient: addIngredient,
    selectedData: [],
};