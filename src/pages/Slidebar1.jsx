import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AvatarList from '../Component/ListProduct/ListProduct'; // Import AvatarList component
import AddProduct from '../Component/AddProduct/AddProduct'; // Import AddProduct component
import AddProduct1 from '../Component/AddProduct/AddProduct1'; // Import AddProduct component
import AddProduct2 from '../Component/AddProduct/AddProduct2'; // Import AddProduct component
import './CSS/Slidebar1.css';
import { Button } from '@mui/material';
import ChatScreen from '../Component/Chat_testing/Chat_testing';



export default function PermanentDrawerLeft() {
  const [open, setOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(<AvatarList/>);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleListItemClick = (component) => {
    setSelectedComponent(component);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar style={{ position: 'absolute', top: 90, left: 0 }}>
        <MenuIcon onClick={handleToggleDrawer} />
      </Toolbar>
      <div style={{ display: 'flex', marginLeft: '50px' }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: '50px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '150px',
              marginTop: '140px', // Adjusted marginTop to move the sidebar up
              borderRight: '3px solid #ccc',
              boxSizing: 'border-box',
              overflowY: 'auto',
              position: 'absolute',
            },
          }}
          className="drawer" // Apply the class name for the drawer
          classes={{ paper: 'drawer-paper' }}
        >
            
          <List >
            {[
              { text: 'Avatar List', component: <AvatarList /> }, // Define text and corresponding component
              { text: 'Chat List',component: <ChatScreen/>}, // Define text and corresponding component
            ].map((item) => (
              <ListItem
                key={item.text}
                disablePadding
                onClick={() => handleListItemClick(item.component)} // Handle click event
                sx={{
                    width: '180%',
                    '& .MuiButtonBase-root': {
                      width: '100%',
                      marginLeft: '-10px', // Decrease the width of the button base // Increase the width of the button base
                    },
                  }}
                  
                className="listItemWidth" 
              >
                <ListItemButton >
                    
                  <ListItemIcon >
                    <InboxIcon /> {/* Use a common icon for all items */}
                  </ListItemIcon>
                  <ListItemText sx={{marginLeft:'-19px'}} primary={item.text} />  {/* margin */}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {selectedComponent.type === AvatarList && ( // Conditionally render the button only if Avatar List is selected
          <Button
            className="slibar-button"
            size='small'
            variant='contained'
            color='primary'
            style={{ position: 'absolute', top: '120px', right: '45px' }}
            onClick={() => handleListItemClick(<AddProduct2/>)}
          >
            + Add Avatar
          </Button>
        )}
        <main>{selectedComponent}</main> {/* Render the selected component */}
      </div>
    </React.Fragment>
  );
}


