import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Bgimage from '../Components/assets/images/logo.png'
import AppBar from '@mui/material/AppBar';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Components/Main_style.scss'
import {

    NavLink, Link
} from "react-router-dom";
const drawerWidth = 250;

function SideNav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', padding: '5px' }} >
                <img src={Bgimage} alt={Bgimage} style={{ width: '80%', height: '80%' }} />
            </Toolbar>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/" className="NavLink" > <OtherHousesIcon />DashBord</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/user" className="NavLink" ><PeopleIcon /> User</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/product" className="NavLink" ><ProductionQuantityLimitsIcon /> Product</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/transction" className="NavLink" ><AccountBalanceWalletIcon /> Transctions</NavLink>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/total_order" className="NavLink" >< ShoppingBagIcon /> Total Order</NavLink>
                    </ListItemButton>
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/profile" className="NavLink" > <NotificationsIcon />Notifications</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/profile" className="NavLink" > <PersonIcon />Profile</NavLink>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <NavLink to="/logout" className="NavLink" ><LogoutIcon /> LogOut</NavLink>
                    </ListItemButton>
                </ListItem>


            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>


            <AppBar position='fixed'
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` }
                }}
                style={{
                    backgroundColor: "#ccb99c",

                }}
            >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"


                    >
                        <MenuIcon sx={{ mr: 1, display: { md: 'none' } }} onClick={handleDrawerToggle} />
                    </IconButton>
                    <IconButton


                    >
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' style={{ height: '63px', borderRadius: '50%' }} />
                    </IconButton>

                </Toolbar>

            </AppBar >
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </>
    );
}



export default SideNav;