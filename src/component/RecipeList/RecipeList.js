import React, {useState} from "react";
import PropTypes from "prop-types";
import './RecipeList.css';
import {ExpansionPanel} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function RecipeList({data}) {
    const [expanded, setExpanded] = useState(false);

    const handleChangeExpansion = expand => (event, isExpanded) => {
        setExpanded(isExpanded ? expand : false);
    }

    const recipe = data.map((el, id) => (
        <ExpansionPanel
            data-testid={"expand-panel"}
            key={id}
            expanded={expanded === el.title}
            onChange={handleChangeExpansion(el.title)}
        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                {el.title}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List dense>
                    {el.ingredients.map((ingredient, idx) => {
                        return (
                            <ListItem key={idx}>
                                <ListItemText
                                    primary={ingredient}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    ));

    return (
        <div className={"recipe-list-container"} data-testid={'list-recipe'}>
            {recipe}
        </div>
    )
}

RecipeList.propTypes = {
    data: PropTypes.array.isRequired
};

export default RecipeList;