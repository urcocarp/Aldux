import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const AboutCard = ({ icon, title, description }) => {
  return (
    <CardContainer>
      <IconContainer>
        <img src={icon} alt={title} />
      </IconContainer>
      <TextContainer>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '8px' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </TextContainer>
    </CardContainer>
  );
};

export default AboutCard;

// Styled components
const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent:'center',
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  padding: "25px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: 500,   // un poco más ancho
  height: 80,     // mayor altura para títulos
  gap: "40px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: "10px",
    height: "auto",
    padding: "10px",
   
  },
}))

const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,       // igual ancho y alto
  height: 80,
  borderRadius: "50%",
  backgroundColor: "#eb5904",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  img: {
    maxWidth: "60%",   // ajusta tamaño del icono dentro del círculo
    maxHeight: "60%",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
