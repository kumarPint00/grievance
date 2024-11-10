'use client';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Avatar, Typography, IconButton, Divider, Box } from '@mui/material';
import { ExpandLess, ExpandMore, Home, Dashboard, Report, Settings, Logout, AccountCircle, AddCircle, ListAlt, Assignment, Notifications, Insights } from '@mui/icons-material';

export default function Sidebar() {
    const [open, setOpen] = useState(true); // State for sidebar collapse
    const [openMenu, setOpenMenu] = useState(null); // State for open submenu
 
    const handleMenuClick = (menu) => {
       setOpenMenu(openMenu === menu ? null : menu); // Toggle submenu open/close
    };
 
    const toggleSidebar = () => {
       setOpen(!open); // Toggle sidebar collapse
    };
 
    const sidebarWidth = open ? 240 : 72; // Width changes based on open state
 
    return (
        <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth, // Adjust width dynamically
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: sidebarWidth, // Consistent drawer width
            boxSizing: "border-box",
            border: 0,
            backgroundColor: "#f5f5f5",
            mt: 10, // Push down content below the navbar
          },
        }}
      >
          <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center' }}>
             {open && <Typography variant="h6">Grievance Portal</Typography>}
             <IconButton onClick={toggleSidebar}>
                {open ? <ExpandLess /> : <ExpandMore />}
             </IconButton>
          </Box>
 
          <Divider />
 
          {/* User Profile Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
             <Avatar src="/static/images/avatar/1.jpg" />
             {open && (
                <Box sx={{ marginLeft: 2 }}>
                   <Typography variant="subtitle1">John Doe</Typography>
                   <Typography variant="body2" color="text.secondary">Support Agent</Typography>
                </Box>
             )}
          </Box>
 
          <Divider />
 
          {/* Sidebar Menu */}
          <List>
             <ListItem button key="Home">
                <ListItemIcon><Home /></ListItemIcon>
                {open && <ListItemText primary="Home" />}
             </ListItem>
 
             <ListItem button key="Dashboard" onClick={() => handleMenuClick("dashboard")}>
                <ListItemIcon><Dashboard /></ListItemIcon>
                {open && <ListItemText primary="Dashboard" />}
                {open && (openMenu === "dashboard" ? <ExpandLess /> : <ExpandMore />)}
             </ListItem>
             {/* Collapsible Dashboard Submenu */}
             <Collapse in={openMenu === "dashboard"} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="Overview" />
                   </ListItem>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="Complaint Stats" />
                   </ListItem>
                </List>
             </Collapse>
 
             <ListItem button key="SubmitComplaint">
                <ListItemIcon><AddCircle /></ListItemIcon>
                {open && <ListItemText primary="Submit Complaint" />}
             </ListItem>
 
             <ListItem button key="ComplaintManagement" onClick={() => handleMenuClick("complaintManagement")}>
                <ListItemIcon><ListAlt /></ListItemIcon>
                {open && <ListItemText primary="Complaint Management" />}
                {open && (openMenu === "complaintManagement" ? <ExpandLess /> : <ExpandMore />)}
             </ListItem>
             {/* Collapsible Complaint Management Submenu */}
             <Collapse in={openMenu === "complaintManagement"} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="All Complaints" />
                   </ListItem>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="Assigned to Me" />
                   </ListItem>
                </List>
             </Collapse>
 
             <ListItem button key="Reports" onClick={() => handleMenuClick("reports")}>
                <ListItemIcon><Report /></ListItemIcon>
                {open && <ListItemText primary="Reports & Analytics" />}
                {open && (openMenu === "reports" ? <ExpandLess /> : <ExpandMore />)}
             </ListItem>
             {/* Collapsible Reports Submenu */}
             <Collapse in={openMenu === "reports"} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="Complaint Insights" />
                   </ListItem>
                   <ListItem button sx={{ pl: 4 }}>
                      <ListItemText primary="Trends & Analysis" />
                   </ListItem>
                </List>
             </Collapse>
 
             <ListItem button key="Notifications">
                <ListItemIcon><Notifications /></ListItemIcon>
                {open && <ListItemText primary="Notifications" />}
             </ListItem>
 
             <ListItem button key="Settings">
                <ListItemIcon><Settings /></ListItemIcon>
                {open && <ListItemText primary="Settings" />}
             </ListItem>
 
             <ListItem button key="UserRoles">
                <ListItemIcon><AccountCircle /></ListItemIcon>
                {open && <ListItemText primary="User Roles & Permissions" />}
             </ListItem>
          </List>
 
          <Divider />
 
          {/* Logout Button */}
          <List>
             <ListItem button key="Logout">
                <ListItemIcon><Logout /></ListItemIcon>
                {open && <ListItemText primary="Logout" />}
             </ListItem>
          </List>
       </Drawer>
    );
 }
