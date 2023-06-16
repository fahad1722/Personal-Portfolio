import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import Resume from "../assets/Resume.pdf";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const strings = [
      "I'm a MERN Stack Developer.",
      "This is my personal portfolio website.",
    ];

    const options = {
      strings: strings,
      typeSpeed: 40,
      loop: true,
    };

    typedRef.current = new Typed("#element", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <Box
      id="home"
      minHeight="100vh"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      bgcolor="primary.main"
      color="white"
    >
      <LeftComponent />
      <RightComponent />
    </Box>
  );
};

const LeftComponent = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    width="50%"
    padding={4}
  >
    <Box
      bgcolor="secondary.main"
      p={2}
      borderRadius={3}
      marginBottom={2}
      sx={{
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Typography variant="h5" component="div">
        My name is
      </Typography>
      <Typography variant="h3" component="div">
        Mohammed Fahad
      </Typography>
    </Box>
    <Typography variant="h5" sx={{ marginTop: "20px" }}>
      <span id="element"></span>
    </Typography>
  </Box>
);

const RightComponent = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    width="50%"
    padding={4}
  >
    <Typography variant="p1" sx={{ fontSize: "20px", textAlign: "justify" }}>
      Hi, I'm Mohammed Fahad, a passionate MERN Stack Developer with experience
      in building web applications. I love coding and enjoy solving complex
      problems to create efficient and user-friendly solutions.
    </Typography>
    <Box mt={4}>
      <Button
        variant="contained"
        color="warning"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ marginRight: 2 }}
      >
        View My Resume
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href={Resume}
        download="Resume.pdf"
      >
        Download Resume
      </Button>
    </Box>
  </Box>
);

export default Home;
