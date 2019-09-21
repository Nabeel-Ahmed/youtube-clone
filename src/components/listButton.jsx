import React from "react";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export default function ListButton(props) {
  return (
      <ListItem button>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.name} />
      </ListItem>
  );
}
