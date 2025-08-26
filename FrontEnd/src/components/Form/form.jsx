import React, { useState } from "react";
import { TextField, Button, MenuItem, Grid, Typography, Box, CircularProgress } from "@mui/material";
import style from "./form.module.css";
import imgcortina from "../../assets/images/form.png";
import axios from "axios";
import Swal from 'sweetalert2';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tipoCortina: "",
    ancho: "",
    alto: "",
    descripcion: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post("http://localhost:3001/quote/quoteRequest", formData);
      if (resp.data.message) {
        Swal.fire({
          title: '¡Éxito!',
          text: resp.data.message,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          tipoCortina: "",
          ancho: "",
          alto: "",
          descripcion: ""
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo enviar la cotización. Inténtalo de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al enviar la solicitud.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* Título */}
    <Box sx={{ width: "100%", mb: 6 }}>
  <Typography variant="h4" sx={{ fontWeight: 300, textAlign: {lg:'left',xs:'center'},marginLeft:{lg:'20px'},fontSize: {lg:'2.5rem'}, color: '#333' }}>
    Pedí tu Cotización
  </Typography>
</Box>

      {/* Contenedor general del form e imagen */}
      <Grid container spacing={4} alignItems="stretch" justifyContent="center"sx={{ borderRadius: '10px', padding: '20px', maxWidth: '100vw', boxSizing: 'border-box', Height: '100%' }}>
        {/* Form Container */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "#fff",
             // border: '1px solid black',
            }}
          >
            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
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
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
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
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                }}
              />
              <TextField
                select
                label="Tipo Cortina"
                name="tipoCortina"
                value={formData.tipoCortina}
                onChange={handleChange}
                variant="standard"
                fullWidth
                defaultValue=""
                sx={{
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                }}
              >
                <MenuItem value="blackout">Blackout</MenuItem>
                <MenuItem value="screen">Screen</MenuItem>
                <MenuItem value="traslúcida">Traslúcida</MenuItem>
              </TextField>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Ancho"
                  name="ancho"
                  value={formData.ancho}
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                    "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
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
                    "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                    "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                  }}
                />
              </Box>
              <TextField
                label="Descripción"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#f16436" },
                    "&:hover fieldset": { borderColor: "#f16436" },
                    "&.Mui-focused fieldset": { borderColor: "#f16436" },
                  },
                }}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  bgcolor: "#f16436",
                  "&:hover": { bgcolor: "#d9532e" },
                  mt: 2,
                  py: 1.5,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {loading ? <CircularProgress size={24} sx={{ color: "#f16436" }} /> : "ENVIAR"}
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Image Container */}
        <Grid item xs={12} lg={6}sx={{display: { xs: "none", lg: "block" }}}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Box
              component="img"
              src={imgcortina}
              alt="Cortina"
              sx={{ width: "100%",  height: "100%", objectFit: "cover", borderRadius: 2 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
