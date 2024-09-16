import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  useTranslation } from 'react-i18next';
// const options = [
//   'en',
//   'ar' ,
// ];
const Header1 = () => {
  const { t, i18n } = useTranslation();
  // const [anchorEl, setAnchorEl] = useState(null);
// const [selectedIndex, setSelectedIndex] = useState(0);
// const open = Boolean(anchorEl);
// const handleClickListItem = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleMenuItemClick = (event, index) => {
//   setSelectedIndex(index);
//   setAnchorEl(null);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor:"#283445",py:"4px",borderBottomRightRadius:4,borderBottomLeftRadius:4}}>
   <Container>
   <Stack flexDirection="row" alignItems="center">
    <Typography sx={{mr:2,p:"3px 10px",bgcolor:"#D23F57",borderRadius:"12px",fontSize:"10px",fontWeight:"bold",color:"#fff"}} variant="body1">{t("hot")}</Typography>
    <Typography sx={{fontSize:"12px",fontWeight:300,color:"#fff"}} variant="body1" color="initial"> {t("free express shopping")} </Typography>
    <Box flexGrow={1}/>
      <div  >
    {theme.palette.mode === "light" ? (
      <IconButton 
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <LightModeOutlined sx={{color:"#fff",fontSize:"16px"}} />
      </IconButton>
    ) : (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <DarkModeOutlined sx={{fontSize:"16px"}} />
      </IconButton>
    )}
  </div>
  {/* <List
        component="nav"
        // aria-label="Device settings"
        sx={{m:0,p:0}}
        
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{"&:hover":{cursor:"pointer"},px:1}}
        >
          <ListItemText sx={{".MuiTypography-root":{color:"#fff"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon fontSize="small" sx={{color:"#fff"}}/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
           sx={{fontSize:"11px",p:"3px 10px",minHeight:"10px"}}
            key={option}
            selected={index === selectedIndex}
            // onClick={() => }
            onClick={(event) => {
              handleMenuItemClick(event, index);
              i18n.changeLanguage("ar");
            }}
          >
            {option} 
          </MenuItem>
        ))}
      </Menu> */}
    <ul className="flex">
          <li  style={{color:theme.palette.info.dark,}} className="main-list lang">
          {t("lang")}

            <ul className="lang-box">
              <li style={{color:theme.palette.info.dark}}
                onClick={() => {
                  i18n.changeLanguage("ar");
                }}
                dir="rtl"
              >
                <p> العربية</p>
                {i18n.language === "ar" && (
                  <i className="fa-solid fa-check"></i>
                )}
              </li>

              <li style={{color:theme.palette.info.dark}}
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
              >
                <p>English</p>

                {i18n.language === "en" && (
                  <i className="fa-solid fa-check"></i>
                )}
              </li>
              {/* <li style={{color:theme.palette.info.dark}}
                onClick={() => {
                  i18n.changeLanguage("fr");
                }}
              >
                <p>French</p>

                {i18n.language === "fr" && (
                  <i className="fa-solid fa-check"></i>
                )}
              </li> */}
            </ul>
          </li>
         </ul>











  <TwitterIcon sx={{fontSize:"16px",color:"#fff"}}/>
  <FacebookIcon sx={{fontSize:"16px",color:"#fff",mx:1}}/>
  <InstagramIcon sx={{fontSize:"16px",color:"#fff"}}/>
  </Stack>
   </Container>
  </Box>
  );
}

export default Header1;
