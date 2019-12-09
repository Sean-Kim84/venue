import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List>
        <ListItem button onClick={() => console.log('featture')}>
          Event Start in
        </ListItem>
        <ListItem button onClick={() => console.log('featture')}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log('featture')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log('featture')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('featture')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
