import { Drawer, List, ListItem, ListItemText,Box,styled,Button } from "@mui/material";
import { useState } from "react";


const MenuDrawer = ({open,toggleDrawer}) => {
    
   

    return(
        <Drawer anchor="right" open={open} onClose={toggleDrawer}
        sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <Box sx={{ width: 250, padding: 2, display: "flex", flexDirection: "column", gap: 1,height:'100vh',justifyContent:'center' }}>
          <NavButton onClick={toggleDrawer}>Inicio</NavButton>
          <NavButton onClick={toggleDrawer}>Sobre Nosotros</NavButton>
          <NavButton onClick={toggleDrawer}>Productos</NavButton>
          <NavButton onClick={toggleDrawer}>Cotización</NavButton>
        </Box>
      </Drawer>
    )
};

export default MenuDrawer;

const NavButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize:'20px',
  position: "relative",
  
  //paddingBottom: 4,
  whiteSpace: "nowrap", // evita que se corte en varias líneas
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 2,
    width: "0%",
    backgroundColor: "#eb5904",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  "&:hover": {
    color: "black",
  },
}));
