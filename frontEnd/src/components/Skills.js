import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiMongodb,
  DiNodejs,
  DiGithubBadge,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => (
  <Box
    id="about"
    minHeight="100vh"
    display="flex"
    flexDirection="column"
    bgcolor="primary.main"
    color="white"
    padding={4}
  >
    <Heading />
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <LeftSection />
      <RightSection />
    </Box>
  </Box>
);

const Heading = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Box bgcolor="secondary.main" p={1} borderRadius={2}  sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}>
      <Typography variant="h5" color="white">
        Skills
      </Typography>
    </Box>
  </Box>
);

const LeftSection = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    flexBasis="50%"
    paddingLeft={4}
  >
    <Box mb={4} textAlign="center"></Box>
    <Grid container spacing={2}>
      {skillsData.map((skill) => (
        <Grid item xs={4} key={skill.name}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            {skill.icon}
            <Typography variant="body1" fontSize="18px">
              {skill.name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const RightSection = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="flex-start"
    flexBasis="50%"
    paddingRight={4}
  >
    <Typography
      variant="body1"
      mb={4}
      sx={{ fontSize: "20px", textAlign: "justify" }}
    >
      Passionate about the MERN stack and continuously seeking opportunities to
      deepen my understanding of MongoDB, Express.js, React, and Node.js through
      hands-on projects and collaborative learning.
    </Typography>
    <Typography variant="h4">Additional Skills</Typography>
    <Typography variant="body1" fontSize="20px">
      - Data Structures and Algorithms
    </Typography>
    <Typography variant="body1" fontSize="20px">
      - SQL
    </Typography>
    <Typography variant="body1" mb={2}></Typography>
    <Typography variant="h4">Languages Known</Typography>
    <Typography variant="body1" fontSize="20px">
      - C
    </Typography>
    <Typography variant="body1" fontSize="20px">
      - Java
    </Typography>
    <Typography variant="body1" fontSize="20px">
      - Python
    </Typography>
  </Box>
);

const skillsData = [
  { name: "HTML", icon: <DiHtml5 size={100} /> },
  { name: "CSS", icon: <DiCss3 size={100} /> },
  { name: "JavaScript", icon: <DiJavascript size={100} /> },
  { name: "ReactJS", icon: <DiReact size={100} /> },
  { name: "NodeJS", icon: <DiNodejs size={100} /> },
  { name: "ExpressJS", icon: <SiExpress size={100} /> },
  { name: "MongoDB", icon: <DiMongodb size={100} /> },
  { name: "Git", icon: <FaGitAlt size={100} /> },
  { name: "GitHub", icon: <DiGithubBadge size={100} /> },
];

export default Skills;
