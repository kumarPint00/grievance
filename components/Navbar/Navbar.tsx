'use client';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, Menu, MenuItem, Avatar, InputBase, Badge, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled, alpha } from '@mui/material/styles';
import { Assignment, AddCircle, Dashboard, Settings } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
       backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(1),
       width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
       padding: theme.spacing(1, 1, 1, 0),
       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
       transition: theme.transitions.create('width'),
       width: '100%',
       [theme.breakpoints.up('md')]: {
          width: '20ch',
       },
    },
}));

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleDrawerToggle = () => {
       setMobileOpen(!mobileOpen);
    };

    const handleProfileMenuOpen = (event) => {
       setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
       setAnchorEl(null);
    };

    const drawer = (
       <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
             Grievance Portal
          </Typography>
          <List>
             {['Home', 'Submit Complaint', 'Manage Complaints', 'Reports', 'Notifications', 'Settings'].map((text) => (
                <ListItem button key={text}>
                   <ListItemText primary={text} />
                </ListItem>
             ))}
          </List>
       </Box>
    );

    return (
       <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="primary" sx={{ padding: '0.5rem 1rem' }}>
             <Toolbar>
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
                   noWrap
                   component="div"
                   sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                   Grievance Portal
                </Typography>
                <Search>
                   <SearchIconWrapper>
                      <SearchIcon />
                   </SearchIconWrapper>
                   <StyledInputBase
                      placeholder="Search complaints…"
                      inputProps={{ 'aria-label': 'search' }}
                   />
                </Search>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                   <Button color="inherit">Submit Complaint</Button>
                   <Button color="inherit">Manage Complaints</Button>
                   <Button color="inherit">Reports</Button>
                   <IconButton color="inherit">
                      <Badge badgeContent={4} color="error">
                         <NotificationsIcon />
                      </Badge>
                   </IconButton>
                   <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls="profile-menu"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                   >
                      <Avatar alt="User Profile" src="/static/images/avatar/1.jpg" />
                   </IconButton>
                </Box>
             </Toolbar>
          </AppBar>

          {/* Drawer for mobile view */}
          <Drawer
             anchor="left"
             open={mobileOpen}
             onClose={handleDrawerToggle}
             sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
             }}
          >
             {drawer}
          </Drawer>

          {/* Profile Menu */}
          <Menu
             anchorEl={anchorEl}
             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
             keepMounted
             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
             open={isMenuOpen}
             onClose={handleMenuClose}
          >
             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
             <MenuItem onClick={handleMenuClose}>My account</MenuItem>
             <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
       </Box>
    );
}
