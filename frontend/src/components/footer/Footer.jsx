import { Box, Button, Typography } from '@mui/material';
 
import {  useTranslation } from 'react-i18next';
const Footer = () => {
  // @ts-ignore
  const { t ,i18n} = useTranslation();
  return (
    <Box
    sx={{
     
      bgcolor: "#2B3445",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"HighlightText"}
      variant="h6"
      sx={{fontSize: 18}}
    >
       {t("Designed and developed by")}
      <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
         {t("<Baker/>")}
        </Button>
      ©2024    </Typography>
  </Box>
  );
}

export default Footer;
