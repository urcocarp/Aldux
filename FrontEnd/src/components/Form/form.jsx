import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Swal from "sweetalert2";

const Form = ({open,setOpen}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tipoCortina: "",
    ancho: "",
    alto: "",
    descripcion: "",
  });

  const [loading, setLoading] = useState(false);
  

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(
        "https://www.aldux.com.ar/server/quote/quoteRequest",
        formData
      );
      if (resp.data.message) {
        Swal.fire({
          title: "¡Éxito!",
          text: resp.data.message,
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          tipoCortina: "",
          ancho: "",
          alto: "",
          descripcion: "",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo enviar la cotización. Inténtalo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al enviar la solicitud.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  console.log(open);
  

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        maxWidth:'100vw',
        height: { xs: "50vh", sm: "40vh", md: 280, lg: 300 },
        bgcolor: "#fff",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.1)",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        p: { xs: 2, sm: 3 },
        zIndex: 1300,
        overflowY: "auto",
        boxSizing: "border-box",
        transition: "transform 0.4s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* Contenedor interno (centrado y limitado al 70%) */}
      <Box
        sx={{
          width: { xs: "95%", sm: "85%", md: "70%" },
          mx: "auto",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins, sans-serif",
              color: "#333",
            }}
          >
            Solicitá tu cotización
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Formulario */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.2,
          }}
        >
          {/* Primera fila */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            />
            <TextField
              label="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            />
            <TextField
              label="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            />
          </Box>

          {/* Segunda fila */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <TextField
              select
              label="Tipo de cortina"
              name="tipoCortina"
              value={formData.tipoCortina}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            >
              <MenuItem value="Roller">Roller</MenuItem>
              <MenuItem value="Bandas verticales">Bandas verticales</MenuItem>
              <MenuItem value="Zebras/Eclipse">
                Cortinas Zebras / Eclipse
              </MenuItem>
              <MenuItem value="Venecianas">Venecianas</MenuItem>
              <MenuItem value="Toldos proyectables">
                Toldos proyectables
              </MenuItem>
              <MenuItem value="Cerramientos">Cerramientos verticales</MenuItem>
              <MenuItem value="Toldos romanos">Toldos romanos</MenuItem>
              <MenuItem value="Pérgolas">Pérgolas</MenuItem>
              <MenuItem value="Automatización">Automatización</MenuItem>
            </TextField>
            <TextField
              label="Ancho"
              name="ancho"
              value={formData.ancho}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            />
            <TextField
              label="Alto"
              name="alto"
              value={formData.alto}
              onChange={handleChange}
              variant="standard"
              fullWidth
              sx={{
                flex: 1,
                "& .MuiInputBase-root:before": {
                  borderBottom: "1px solid #f16436",
                },
                "& .MuiInputBase-root:after": {
                  borderBottom: "2px solid #f16436",
                },
              }}
            />
          </Box>

          {/* Descripción */}
          <TextField
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#f16436" },
                "&:hover fieldset": { borderColor: "#f16436" },
                "&.Mui-focused fieldset": { borderColor: "#f16436" },
              },
            }}
          />

          {/* Botón */}
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              sx={{
                bgcolor: "#f16436",
                "&:hover": { bgcolor: "#d9532e" },
                px: 4,
                py: 1.3,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "ENVIAR"
              )}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
