import { Drawer, Box, styled, Button } from "@mui/material";

const MenuDrawer = ({open, toggleDrawer, onInicioClick, onSobreClick, onProductosClick, onCotizacionClick}) => {
  return (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={toggleDrawer}
      sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}
    >
      <Box 
        sx={{ 
          width: 250, 
          padding: 2, 
          display: "flex", 
          flexDirection: "column", 
          gap: 2, 
          height:'100vh', 
          justifyContent:'center' 
        }}
      >
        <NavButton onClick={() => { onInicioClick(); toggleDrawer(); }}>Inicio</NavButton>
        <NavButton onClick={() => { onSobreClick(); toggleDrawer(); }}>Sobre Nosotros</NavButton>
        <NavButton onClick={() => { onProductosClick(); toggleDrawer(); }}>Productos</NavButton>
        <NavButton onClick={() => { onCotizacionClick(); toggleDrawer(); }}>Cotización</NavButton>
      </Box>
    </Drawer>
  )
};

export default MenuDrawer;

const NavButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: '20px',
  position: "relative",
  whiteSpace: "nowrap",
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

