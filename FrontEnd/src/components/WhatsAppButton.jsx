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
        bottom: 20,
        right: 20,
        zIndex: 2000,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
