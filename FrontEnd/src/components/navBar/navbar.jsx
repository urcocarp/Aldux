import { AppBar, Toolbar, IconButton, Button, Box, styled } from "@mui/material";
import { React,useState } from "react";
import MenuDrawer from "../Menudrawer";
import menuIcon from '../../assets/iconos/Untitled/tabler-icon-menu-2.svg';
import logo from "../../assets/images/logo-aldux.svg";

const NavBar = () => {
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
        {/* Logo */}
        <LogoContainer>
          <Box component="img" src={logo} alt="Logo Aldux" sx={{ width: "160px", height: "60px" }} />
        </LogoContainer>

        {/* Nav links */}
        <NavLinks>
          <NavButton>Inicio</NavButton>
          <NavButton>Sobre Nosotros</NavButton>
          <NavButton>Productos</NavButton>
          <NavButton>Cotización</NavButton>
        </NavLinks>
        <MenuDrawer open={openDrawer} toggleDrawer={handleClosedrawer} />

        {/* Mobile menu button */}
        <MobileMenuButton>
          <IconButton color="black" onClick={handleOpenDrawer}>
           <Box component="img" src={menuIcon} alt="Menu" sx={{ width: 40, height: 40, marginRight:'35px' }} />
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
  maxWidth: '1600px', // limita el ancho máximo
  margin: "0 auto",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 10,
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  flexWrap: "wrap", // permite que los botones se ajusten si falta espacio
  [theme.breakpoints.down("md")]: {
    gap: "15px", // menos espacio en tablet
  },
  [theme.breakpoints.down("sm")]: {
    display: "none", // se oculta en móviles
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
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex", // Solo se ve en móvil
  },
}));
