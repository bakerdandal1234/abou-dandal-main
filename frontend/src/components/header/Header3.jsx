import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import {
  Box,
  Container,
  useTheme,
  IconButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  ListItemButton,
  ListItem,
  List,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
} from "@mui/icons-material";
import Links from "./Links";
import {  useTranslation } from 'react-i18next';
const Header3 = () => {
  const { t ,i18n} = useTranslation();
  const accordionActionsClasses = [
    { title: "home", sublink: ["Link1", "Link2", "Link3"] },
    { title: "Mega menu", sublink: ["bkr", "zkr", "3bd"] },
    { title: "full screen menu", sublink: ["Link1", "Link2", "Link3"] },
    { title: "home", sublink: ["Link1", "Link2", "Link3"] },
    { title: "pages", sublink: ["Link1", "Link2", "Link3"] },
    { title: "user account", sublink: ["Link1", "Link2", "Link3"] },
    { title: "vendor account", sublink: ["Link1", "Link2", "Link3"] },
  ];
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // @ts-ignore
          sx={{
            width: "230px",
            display: "flex",
            alignItems: "center",
            // @ts-ignore
            bgcolor: theme.palette.favColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowIcon />
           {t("Dashboard")}
          <Box flexGrow={1} />
          <ExpandMore fontSize="small" />
        </Button>
        <Menu
          sx={{ ".MuiList-root": { width: "230px" } }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText> {t("Bikes")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText> {t("Electroniques")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>  {t("Books")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText> {t("Games")}</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <Box flexGrow={1} />
      {useMediaQuery("(min-width:1200px)") && (
        <Stack sx={{flexDirection:"row",alignItems:"center",gap:"15px",zIndex:2}} >
          <Links title= {t("Home")} />
          <Links title={t("Mega menu")} />
          <Links title={t("full screen menu")} />
          <Links title={t("pages")} />
          <Links title={t("user account")} />
          <Links title={t("vendor account")} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{
            width: "300px",
            mr: "auto",
            ml: "auto",
            mt: "50px",
            position: "relative",
            pt: "100px",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
              ":hover": { rotate: "360deg", transition: "0.3s", color: "red" },
            }}
            aria-label=""
            onClick={toggleDrawer("top", false)}
          >
            <CloseIcon />
          </IconButton>

          {accordionActionsClasses.map((item) => {
            return (
              <Accordion key={item.title} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>

                <nav aria-label="secondary mailbox folders">
                  <List sx={{ py: 0, my: 0 }}>
                    {item.sublink.map((link) => {
                      return (
                        <ListItem key={link} sx={{ py: 0, my: 0 }}>
                          <ListItemButton>
                            <ListItemText primary={link} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </nav>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
