/* eslint-disable react/prop-types */
import { Box, Stack, Typography, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";


const Details = ({clickProduct}) => {


  const[selectImg,setselectImg]=useState(0)
  return (
    <Box sx={{display:"flex",alignItems:"center",gap:2.5,flexDirection:{md:"row",xs:"column"}}}>
      <Box sx={{display:"flex"}}>
        <img width={350} src={clickProduct.attributes.productImg.data[
// @ts-ignore
        selectImg].attributes.url} alt="" />
      </Box>
      <Box  sx={{textAlign:"center"}}  >
        <Typography variant="h5" >{clickProduct.attributes.productTitle} </Typography>
        <Typography my={0.4} fontSize={"22px"} variant="body1" >${clickProduct.attributes.productPrice}</Typography>
        <Typography className="balance" variant="body1" >
        {clickProduct.attributes.productDescription}
        </Typography>
        
              <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} flexDirection={"row"} gap={1} my={2}>
              <ToggleButtonGroup
      value={selectImg}
      exclusive
      sx={{
        ".Mui-selected": {
          border: "1px solid royalblue !important",
          borderRadius:"5px !important",
          opacity:"1",
          backgroundColor: "initial",
        },
      }}
    >
              {clickProduct.attributes.productImg.data.map((item,index) => {
            return(
              <ToggleButton key={item.id} value={index} sx={{width:"110px",height:"110px",mx:1,p:"0",opacity:"0.5"}} >
<img onClick={() => {
              setselectImg(index)
            
             }} style={{borderRadius:3,height:"100px",width:"100px"}}   src={item.attributes.url} alt="" />
      </ToggleButton>
              
             
            )
          })}
          </ToggleButtonGroup>

           

          </Stack>
          <Button sx={{textTransform:"capitalize",mb:{xs:"10px"}}} variant="contained" color="primary">
          <AddShoppingCartIcon sx={{ mr: "10px", fontSize: "16px" }} />
            buy now
          </Button>
      </Box>
    </Box>
  );
}

export default Details;
