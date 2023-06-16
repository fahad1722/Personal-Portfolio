import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@mui/material';

const Navbar = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    const tabValues = ['/', '/skills', '/projects', '/contact'];
    setValue(tabValues.indexOf(path));
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: '40px',
            flexGrow: 1,
            fontFamily: 'Varela Round, sans-serif',
            color: 'white',
          }}
        >
          Mohammed Fahad
        </Typography>

        <Tabs value={value} onChange={handleChange} sx={{ marginLeft: 'auto' }}>
          <Tab
            label="Home"
            component={Link}
            to="/"
            sx={{
              fontSize: '20px',
              textTransform: 'capitalize',
              color : 'white',
              backgroundColor: value === 0 ? 'white' : 'transparent',
            }}
          />
          <Tab
            label="Skills"
            component={Link}
            to="/skills"
            sx={{
              fontSize: '20px',
              textTransform: 'capitalize',
              color : 'white',
              backgroundColor: value === 1 ? 'white' : 'transparent',
            }}
          />
          <Tab
            label="Projects"
            component={Link}
            to="/projects"
            sx={{
              fontSize: '20px',
              textTransform: 'capitalize',
              color : 'white',
              backgroundColor: value === 2 ? 'white' : 'transparent',
            }}
          />
          <Tab
            label="Contact"
            component={Link}
            to="/contact"
            sx={{
              fontSize: '20px',
              textTransform: 'capitalize',
              color : 'white',
              backgroundColor: value === 3 ? 'white' : 'transparent',
            }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
