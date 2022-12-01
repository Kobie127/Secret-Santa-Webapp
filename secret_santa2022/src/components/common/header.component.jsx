import React from "react"
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import '../common/styles/header.styles.css';

const pages = [
  {name:'Reported Crimes', link:'/reported-crimes'},
  {name:'Most Wanted', link:'/most-wanted'}, 
  {name:'Baseline Test', link: '/baseline-test'}
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Toolbar disableGutters>
          <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              marginLeft: '6px',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              }}
          >
              Rochester Police Database
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                      display: { xs: 'block', md: 'none' },
                  }}
              >
                  {pages.map((page) => (
                      <MenuItem key={page.name} >
                            <Typography  
                              sx={{
                                letterSpacing: '.3rem', 
                                color: 'inherit', 
                                textDecoration: 'none'
                              }}>
                                  <Link to={page.link}>
                                    {page.name}
                                  </Link>
                            </Typography>
                      </MenuItem>
                  ))}
              </Menu>
          </Box>
          <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              }}
          >
              Rochester Police Database
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                      <Link to={page.link}>{page.name}</Link>
                  </Button>
                  ))}
          </Box>
          
      </Toolbar>
</AppBar>
  );
}
