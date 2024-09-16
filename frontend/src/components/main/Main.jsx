import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  ToggleButton,
  Typography,
  useTheme,
  Button,
  Rating,
  Dialog,
  IconButton,
} from "@mui/material";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import Details from "./Details";
import { useGetproductsByNameQuery } from "../../redux/products";
import {AnimatePresence, motion} from "framer-motion"
import {  useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const Main = () => {
    // @ts-ignore
    const { t ,i18n} = useTranslation();
  const allProductApi="products?populate=*"
  const menProductApi="products?populate=*&filters[productCategory][$eq]=man"
  const womenProductApi="products?populate=*&filters[productCategory][$eq]=woman"
  const [myData,setmyData]=useState(allProductApi)



  const { data, error, isLoading } = useGetproductsByNameQuery(myData)



  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const [value, setValue] = useState(3.5);

  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
    setmyData(newValue)
    }
  };





  const theme = useTheme();
  const [clickProduct, setclickProduct] = useState({});
  // if (data) {
  //   console.log(data.data);
  // }
  if(error){
    return(
      <Typography variant="h4" color="error">{error.
// @ts-ignore
      error}</Typography>
    )
  }
  if(isLoading){
    return(
     <h1>loading</h1>
    )
  }

    if(data){
      return (
        <Container sx={{ py: "50px" }}>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            gap={3}
          >
            <Box>
              <Typography variant="h5"> {t("selected products")} </Typography>
              <Typography variant="body1">
                 {t("All our new arrivals in a exclusive brand selection")}
              </Typography>
            </Box>
            <Box>
              <ToggleButtonGroup
                color="error"
                value={myData}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                sx={{
                  ".Mui-selected": {
                    border: "1px solid rgba(233,69,96,0.5) !important",
                    color: "#e94560",
                    backgroundColor: "initial",
                  },
                }}
              >
                <ToggleButton
                  sx={{ color: theme.palette.text.primary }}
                  className="myButton"
                  value={allProductApi}
                  aria-label="left aligned"
                >
                   {t("All products")}
                </ToggleButton>
                <ToggleButton
                  sx={{ mx: "16px !important", color: theme.palette.text.primary }}
                  className="myButton"
                  value={menProductApi}
                  aria-label="centered" 
                >
                   {t("MEN category")}
                </ToggleButton>
                <ToggleButton
                  sx={{ color: theme.palette.text.primary }}
                  className="myButton"
                  value={womenProductApi}
                  aria-label="right aligned"
                >
                   {t("Women category")}
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Stack>
        
              <Stack
              sx={{
                flexDirection: "row",
                justifyContent:{xs:"center",sm:"space-between"} ,
                flexWrap: "Wrap",
              }}
            >
            <AnimatePresence>
              {data.data.map((item) => {
                console.log(data.data)
                return (
                  <Card
                  component={motion.section}
                  layout
                  initial={{transform:"scale(0)"}}
                  animate={{transform:"scale(1)"}}
                  transition={{duration:1.7,type:"spring",stiffness:50}}
                    key={item.id}
                    sx={{
                      maxWidth: 345,
                      mt: "20px",
                      ":hover .MuiCardMedia-root": {
                        scale: "1.1",
                        transition: "all 0.2s",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="277"
                      // @ts-ignore
                      image={`${item.attributes.productImg.data[0].attributes.url}`}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mb: "10px",
                        }}
                      >
                        <Typography variant="body1">{item.attributes.productTitle}</Typography>
                        <Typography variant="body1">${item.attributes.productPrice}</Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                      {item.attributes.productDescription}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button
                        onClick={() => {
                          handleClickOpen()
                          setclickProduct(item)
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                        variant="text"
                        color="primary"
                      >
                        <AddShoppingCartIcon sx={{ mr: "10px", fontSize: "16px" }} />
                        Add to cart
                      </Button>
      
                      <Rating
                        name="read-only"
                        value={item.attributes.productRating}
                        precision={0.5}
                        readOnly
                      />
                    </CardActions>
                  </Card>
                );
              })}
              </AnimatePresence>
            </Stack>
          
          <Dialog
            sx={{
              ".MuiPaper-root": {
                minWidth: { xs:"100%" , md: 800 },
              
                borderRadius: "12px",
              },
              animation: "mymove 0.8s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 10,
                ":hover": { rotate: "360deg", transition: "0.3s", color: "red" },
              }}
              aria-label=""
              onClick={handleClose}
            >
              <Close />
            </IconButton>
            <Details clickProduct={clickProduct}/>
          </Dialog>
        </Container>
      );
    }
  
  }

export default Main;
