import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Table,
  TableCell,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  opacity: 0,
  transition: "opacity 0.5s ease",
  "&.show": {
    opacity: 1,
  },
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Change the fetch URL to match your backend server address
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully");
        } else {
          console.log("Error sending email");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const renderIconName = (icon) => {
    const isHovered = hoveredIcon === icon;
    return (
      <AnimatedTypography
        variant="body1"
        sx={{
          fontSize: "30px",
          color: "white",
          opacity: 0,
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transform: "translateX(-20px)",
          "&.show": {
            opacity: 1,
            transform: "translateX(0)",
          },
        }}
        className={isHovered ? "show" : ""}
      >
        {icon.charAt(0).toUpperCase() + icon.slice(1)}
      </AnimatedTypography>
    );
  };

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
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Typography variant="h3">Contact Me</Typography>
          <Table
            sx={{
              borderCollapse: "collapse",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <IconButton
                  component={Link}
                  href="mailto:mohammedfahad1905@gmail.com"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  aria-label="Email"
                  onMouseEnter={() => handleIconHover("email")}
                  onMouseLeave={handleIconLeave}
                >
                  <EmailIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                {renderIconName("email")}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <IconButton
                  component={Link}
                  href="https://github.com/fahad1722/"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  aria-label="GitHub"
                  onMouseEnter={() => handleIconHover("github")}
                  onMouseLeave={handleIconLeave}
                >
                  <GitHubIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                {renderIconName("github")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com/in/fahad177/"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  aria-label="LinkedIn"
                  onMouseEnter={() => handleIconHover("linkedin")}
                  onMouseLeave={handleIconLeave}
                >
                  <LinkedInIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                {renderIconName("linkedin")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <IconButton
                  component={Link}
                  href="https://instagram.com/fahadmohammed_17"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  aria-label="Instagram"
                  onMouseEnter={() => handleIconHover("instagram")}
                  onMouseLeave={handleIconLeave}
                >
                  <InstagramIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                {renderIconName("instagram")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <IconButton
                  component={Link}
                  href="https://twitter.com/Fahad78817"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  aria-label="Twitter"
                  onMouseEnter={() => handleIconHover("twitter")}
                  onMouseLeave={handleIconLeave}
                >
                  <TwitterIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                {renderIconName("twitter")}
              </TableCell>
            </TableRow>
          </Table>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box sx={{ maxWidth: "400px", bgcolor: "white", p: 3 }}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" color="primary.main" mb={2}>
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                margin="normal"
              />
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                margin="normal"
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Contact;
