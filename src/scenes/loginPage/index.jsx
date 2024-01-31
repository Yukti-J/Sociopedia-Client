import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router";
import Form from "./Form"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  // const navigate = useNavigate();
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center" >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.75rem)"
          color="primary"
        >
          Sociopedia
        </Typography>
        <Form/>
      </Box>
      
      <Box width={isNonMobileScreens ? "50%" : "93%"}
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
          Welcome to Sociopedia, the Social Media for Sociopaths!
        </Typography>

      </Box>
    </Box>
  );
};

export default LoginPage;
