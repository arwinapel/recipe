import React from "react";
import PropTypes from "prop-types";
import DateFnsUtil from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import './AppHeader.css';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";

function AppHeader({selectedDate, handleDateChange, getIngredients}) {
    return (
        <div className={"appheader-container"}>
            <MuiPickersUtilsProvider utils={DateFnsUtil}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    label="Choose Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    inputProps={{'data-testid': 'input-date'}}
                />
                <Button
                    className={'btn-check-ingredient'}
                    data-testid={"check-ingredient-btn"}
                    variant={"contained"}
                    color={"primary"}
                    disableElevation
                    onClick={getIngredients}
                >
                    Check Ingredients
                </Button>
            </MuiPickersUtilsProvider>
        </div>
    )
}

AppHeader.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    getIngredients: PropTypes.func.isRequired
};

export default AppHeader;