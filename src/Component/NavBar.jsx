import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';

const drawerWidth = 240;
const navItems = [
    {
        id: 1,
        name: 'Education',
        Path: '#Education'
    },
    {
        id: 2,
        name: 'Skills ',
        Path: '#Skills '
    },
    {
        id: 3,
        name: 'Portfolio ',
        Path: '#Portfolio '
    },
    {
        id: 4,
        name: 'Experience ',
        Path: '#Experience '
    },
    {
        id: 5,
        name: 'Contact',
        Path: '#Contact'
    },
];


const  NavBar = (
{
    props = (item) => {
        return item;
    },
    ContactCode = (value) => {
        return value
    }
}


) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box style={{ background: 'black' }}  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                {
                  item.id == '5'
                  ? <a onClick={() => ContactCode(0)}  className="Links" href="#Contact">{item.name}</a>
                  : <a  className="Links" href={item.Path}>
                  {item.name}
                  </a>
                }
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar  component="nav" style={{ background: 'black' }}  >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <a className="Links" href="#">Leandro Santiago</a>
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                item.id == 5 
                ? 
                   <Button key={item.id} sx={{ color: '#fff' }}>
                    <a onClick={() => ContactCode(0)}  className="Links" href="#Contact">{item.name}</a>
                  </Button>
            
                :
                <Button key={item.id} sx={{ color: '#fff' }}>
                    <a  className="Links" href={item.Path}>
                        {item.name}
                    </a>
                </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;