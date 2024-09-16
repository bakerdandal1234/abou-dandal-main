import { Box, Container, Link, Stack, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import {  useTranslation } from 'react-i18next';
// import required modules
import { Pagination } from "swiper/modules";
const Hero = () => {
  const { t ,i18n} = useTranslation();
  const theme=useTheme()
  const showGender=[
    {title:"MEN",Link:"./t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-15.jpg"},
    {title:"WOMEN",Link:"./t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-25.jpg"}
  ]
  return (
    <Container
      sx={{p:1, display: "flex", alignItems: "center", mt: 3, gap: "8px" }}
    >
      <Swiper loop={true} pagination={true} modules={[Pagination]} className="mySwiper">
        {showGender.map((item) => {
          return(
            <SwiperSlide key={item.Link} className="parent-slider">
          <img 
            src={item.Link}
            alt=""
          />
        
        
              <Box 
            sx={{[theme.breakpoints.up('sm')]: {
              position: "absolute", left: "10%", textAlign: "left",
            },

            [theme.breakpoints.down('sm')]: {
              pt:4,
              pb:6
            }
            
          }}
          >
            <Typography variant="h5" color="#222">
               {t("LIFESTYLE COLLECTION")}
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#222", fontWeight: 400, my: 1 }}
            >
              {item.title}
            </Typography>
            <Stack sx={{ flexDirection: "row", alignItems: "center",justifyContent:{xs:"center",sm:"left"} }}>
              <Typography variant="h5" color="#333">
                 {t("SALE UP TO")}
              </Typography>
              <Typography variant="h5" color="error" sx={{ ml: 2 }}>
                 {t("30% OFF")}
              </Typography>
            </Stack>
            <Typography variant="body1" sx={{ fontWeight: 300, color: "#000" }}>
               {t("get Free shipping on orders over $99.00")}
            </Typography>
            <Button
              variant="contained"
              sx={{
                px: 5,
                py: 1,
                mt: 2,
                bgcolor: "#222",
                color: "#fff",
                ml:"auto",
                mr:"auto",
                display:"block",
                borderRadius: "1px",
                ":hover": { bgcolor: "#151515" },
              }}
            >
               {t("SHOP NOW")}
            </Button>
          </Box>
        </SwiperSlide>
          )
        })}
      </Swiper>

      <Box
  
        sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}
      >
        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            src="./t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-17.jpg"
            alt=""
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: "25px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "18px" }}
            >
               {t("NEW ARRIVALS")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", fontSize: "16px", mt: "8px" }}
            >
               {t("SUMMER")}
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
               {t("Sale 20% OFF")}
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                ":hover": { color: "#D23F57" },
              }}
              href="#"
              underline="none"
            >
                {t("shop now")}
              <ArrowForwardIcon />
            </Link>
          </Stack>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            src="./t-shirts-react-ecomerce-dev-ali-youtube-channel/banner-16.jpg"
            alt=""
          />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              ml: "25px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "18px" }}
            >
                {t("GAMING")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", fontSize: "16px", mt: "8px" }}
            >
               {t("DESKTOP &")}
            </Typography>
            <Typography variant="h6" sx={{ color: "#2b3445" }}>
               {t("LAPTOPS")}
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                ":hover": { color: "#D23F57" },
              }}
              href="#"
              underline="none"
            >
               {t("shop now")}
              <ArrowForwardIcon />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
