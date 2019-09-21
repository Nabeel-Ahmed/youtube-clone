import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import ListButton from './listButton'

import ListItemIcon from "@material-ui/core/ListItemIcon";

import HomeIcon from "@material-ui/icons/Home";
import TrendingUp from "@material-ui/icons/TrendingUp";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import FolderIcon from "@material-ui/icons/Folder";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SubscriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
      </List>
      <Divider />

      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
      <ListButton name='ass' icon={<FolderIcon/>}/>
      
      <Divider/>
      <ListButton name='Music'/>
      <ListButton name='Sports'/>
      <ListButton name='Gaming'/>
      <ListButton name='Films'/>
      <ListButton name='Films'/>

      <Divider/>
      <ListButton name='Browse Channels'/>
      <Divider/>
      More From YOutugbe
      <ListButton name='YouTube Premium'/>
      <ListButton name='Live'/>
      <Divider/>
      <ListButton name='Settings'/>
      <ListButton name='Report history'/>
      <ListButton name='Help'/>
      <ListButton name='Send feeback'/>
      
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
