import React from "react";
import PropTypes from "prop-types";
import DateFnsUtil from "@date-io/date-fns";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";

function AppHeader({selectedDate, handleDateChange}) {
    return (
        <div className={"appheader-container"}>
            <MuiPickersUtilsProvider utils={DateFnsUtil}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    inputProps={{'data-testid': 'input-date'}}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}

AppHeader.propTypes = {
    selectedDate: PropTypes.object.isRequired,
    handleDateChange: PropTypes.func.isRequired
};

export default AppHeader;