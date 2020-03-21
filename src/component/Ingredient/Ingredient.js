import React from "react";
import PropTypes from 'prop-types';
import "./Ingredient.css";
import ListItemText from '@material-ui/core/ListItemText';
import {Checkbox, ListItemIcon, ListItem} from "@material-ui/core";

function Ingredient({title, useBy, addIngredient, selected, disabled}) {
    return (
        <ListItem
            dense
            button
            data-testid={'ingredient'}
            onClick={() => addIngredient(title)}
            disabled={disabled}
        >
            <ListItemIcon>
                <Checkbox
                    data-testid={'checked-ingredient'}
                    edge="start"
                    checked={selected}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': title}}
                />
            </ListItemIcon>
            <ListItemText
                disabled={new Date(useBy) < new Date()}
                primary={title}
                secondary={useBy}
                primaryTypographyProps={{
                    "data-testid": 'title-ingredient'
                }}
                secondaryTypographyProps={{
                    "data-testid": 'useby-ingredient'
                }}
            />
        </ListItem>
    )
}

Ingredient.propTypes = {
    title: PropTypes.string.isRequired,
    useBy: PropTypes.string.isRequired,
    addIngredient: PropTypes.func.isRequired,
    select: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Ingredient;