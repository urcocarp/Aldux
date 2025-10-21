import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = "3518509477";
  const message = "Hola, quiero más información";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Fab
      color="success"
      onClick={handleClick}
      sx={{
         position: "fixed",
    top: { xs: "auto", md: "50%" },   // en móvil no usamos top
    bottom: { xs: 20, md: "auto" },   // en móvil 20px desde abajo
    right: 20,                         // siempre a la derecha
    transform: { xs: "none", md: "translateY(-50%)" }, // desktop centrado vertical
    zIndex: 2000,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    width: 60,
    height: 60,
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 40 }} /> {/* ícono más grande */}
    </Fab>
  );
};

export default WhatsAppButton;
