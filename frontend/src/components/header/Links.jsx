import { ExpandMore } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton,  ListItemText, Paper, Typography } from "@mui/material";
import {  useTranslation } from 'react-i18next';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// eslint-disable-next-line react/prop-types
const Links = ({title}) => {
  const { t ,i18n} = useTranslation();
  return (
    <Box sx={{position:"relative",":hover .show-when-hover ":{display:"block",}}}  display={"flex"} alignItems={"center"} >
      <Typography  variant="h6">{title}</Typography>
      <ExpandMore
                fontSize="small" sx={{ml:"8px",".css-hkwwj4-MuiSvgIcon-root":{marginLeft:"2px"}}}
              />
    <Box  className="show-when-hover "  sx={{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",minWidth:"170px",display:"none"}} >
      <Paper sx={{mt:2}}  >
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary= {t("Dashboard")} />
                </ListItemButton>
              </ListItem>



              <ListItem  sx={{position:"relative",":hover .hide-when-hover":{display:"block"}}} disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5,}} component="a" href="#simple-list">
                  <ListItemText  sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary= {t("products")} />
                  <Box flexGrow={1}/>
                  <KeyboardArrowRightIcon fontSize="small"/>
                </ListItemButton>
                <Box className=" hide-when-hover"  sx={{position:"absolute",top:"0",left:"100%",display:"none"}}>
                <Paper sx={{ml:"10px",minWidth:"150px"}}>
                <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0,px:1.5,}}>
              <ListItemText sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary= {t("Add product")} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex",p:0,px:1.5,}} component="a" href="#simple-list">
              <ListItemText sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary= {t("Edit product")} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Paper>
      </Box>
              </ListItem>












              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary= {t("orders")} />
                </ListItemButton>
              </ListItem>



              <ListItem disablePadding>
                <ListItemButton sx={{display:"flex",p:0,px:1.5}}>
                  <ListItemText sx={{".MuiTypography-root":{fontSize:"15px"},fontWeight:300     }} primary=  {t("profile")} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
      </Paper>
    </Box>
    </Box>
  );
}

export default Links;
