import { AppBar, Toolbar, IconButton, Button, Box, styled } from "@mui/material";
import { React,useState } from "react";
import MenuDrawer from "../MenuDrawer";
import menuIcon from '../../assets/iconos/Untitled/tabler-icon-menu-2.svg';
import logo from "../../assets/images/logo-aldux.svg";

const NavBar = ({ onInicioClick, onSobreClick, onProductosClick, onCotizacionClick }) => {
   const [openDrawer, setOpenDrawer] = useState(false);
   console.log(openDrawer);
   

   const handleOpenDrawer = () => {
      setOpenDrawer(true);
   };

   const handleClosedrawer = () => {
      setOpenDrawer(false);
   };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        
        <LogoContainer>
          <Box component="img" src={logo} alt="Logo Aldux" sx={{ width: "160px", height: "60px" }} />
        </LogoContainer>

        
        <NavLinks>
          <NavButton onClick={onInicioClick}>Inicio</NavButton>
          <NavButton onClick={onSobreClick}>Sobre Nosotros</NavButton>
          <NavButton onClick={onProductosClick}>Productos</NavButton>
          <NavButton onClick={onCotizacionClick}>Cotización</NavButton>
        </NavLinks>
       <MenuDrawer 
            open={openDrawer} 
            toggleDrawer={handleClosedrawer}
            onInicioClick={onInicioClick}
            onSobreClick={onSobreClick}
            onProductosClick={onProductosClick}
            onCotizacionClick={onCotizacionClick}
        />

        
        <MobileMenuButton>
          <IconButton color="black" onClick={handleOpenDrawer}>
           <Box component="img" src={menuIcon} alt="Menu" sx={{ width: 40, height: 40}} />
          </IconButton>
        </MobileMenuButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: "100vw",
  display: "flex",
 justifyContent: "center",
 //padding: "0 20px",
 
  backgroundColor: "white",
  color: "black",
  height: 80,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  zIndex: 1000,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  width: "100%",
  padding: "0 20px",
  maxWidth: "100%", // quitar restricción fija
  margin: "0 ",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    padding: "0 15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexShrink: 0, // evitar que el logo se comprima
  [theme.breakpoints.down("sm")]: {
    marginLeft: 10,
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "none", // oculto por defecto
  gap: "30px",
  flexWrap: "wrap",
  overflow: "visible",
  [theme.breakpoints.up("md")]: { // desktop ≥ 900px
    display: "flex",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontFamily: "Poppins",
  fontWeight: 400,
  position: "relative",
  paddingBottom: 4,
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
const MobileMenuButton = styled(Box)(({ theme }) => ({
  display: "flex", // visible por defecto
  [theme.breakpoints.up("md")]: { // oculto en desktop ≥ 900px
    display: "none",
  },
}));
