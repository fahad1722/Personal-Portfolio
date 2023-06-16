import React from "react";
import { Box, Typography, Card, CardActionArea, CardContent } from "@mui/material";

// Import project images from the assets folder
import project1 from "../assets/project1.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.JPG";

const Projects = () => (
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
    <Box display="flex" justifyContent="center" alignItems="center">
      <Project
        title="CRUD Application"
        image={project1}
        githubLink="https://github.com/fahad1722/mern"
      />
      <Project
        title="FitnessHub Website"
        image={project2}
        githubLink="https://github.com/username/fitnesshub-website"
      />
      <Project
        title="Personal Portfolio"
        image={project3}
        githubLink="https://github.com/username/personal-portfolio"
      />
    </Box>
  </Box>
);

const Project = ({ title, image, githubLink }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 300,
      margin: "30px",
      transition: "transform 0.4s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    <CardActionArea href={githubLink} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> {/* Apply object-fit: cover to maintain image aspect ratio */}
      <CardContent>
        <Typography variant="h5" component="div" mt={2} textAlign="center">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardContent>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          View on GitHub
        </a>
      </Typography>
    </CardContent>
  </Card>
);

export default Projects;
