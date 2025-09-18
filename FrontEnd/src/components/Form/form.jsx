import React, { useState, useRef, useEffect } from "react";
import { TextField, Button, MenuItem, Typography, Box, CircularProgress } from "@mui/material";
import imgcortina from "../../assets/images/fondovolteado.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
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
  const [visible, setVisible] = useState(false); // estado para animación
  const fraseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // desconecta después de que aparezca
        }
      },
      { threshold: 0.3 } // 30% visible para activar
    );
    if (fraseRef.current) observer.observe(fraseRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(
        "https://aldux.com.ar/server/quote/quoteRequest",
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

  return (
   <Box
  sx={{
    width: "100vw",
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pl: { lg: 20, xs: 2 },
    pr: { lg: 10, xs: 2 },
    mt: 10,
    backgroundImage: { xs: "none", sm: `url(${imgcortina})` },
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 4 },
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Formulario */}
        <Box
          sx={{
            flex: { xs: "none", lg: 1 },
            maxWidth: { xs: "450px", lg: "25%" },
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              textAlign: { lg: "left", xs: "center" },
              marginBottom: 3,
              fontSize: { lg: "2rem", xs: "1.7rem" },
              color: "#333",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Pedí tu Cotización
          </Typography>

          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} variant="standard" fullWidth
              sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
            />
            <TextField label="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange} variant="standard" fullWidth
              sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
            />
            <TextField label="Correo" name="correo" value={formData.correo} onChange={handleChange} variant="standard" fullWidth
              sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
            />
            <TextField select label="Tipo Cortina" name="tipoCortina" value={formData.tipoCortina} onChange={handleChange} variant="standard" fullWidth defaultValue=""
              sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
            >
              <MenuItem value="blackout">Roller</MenuItem>
              <MenuItem value="screen">Bandas verticales</MenuItem>
              <MenuItem value="traslúcida">Cortinas zebras/eclipse</MenuItem>
              <MenuItem value="traslúcida">Venecianas</MenuItem>
              <MenuItem value="traslúcida">Toldos proyectables</MenuItem>
              <MenuItem value="traslúcida">Cerramientos verticales</MenuItem>
              <MenuItem value="traslúcida">Toldos romanos</MenuItem>
              <MenuItem value="traslúcida">Pergolas</MenuItem>
              <MenuItem value="traslúcida">Automatizacion</MenuItem>
            </TextField>

            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <TextField label="Ancho" name="ancho" value={formData.ancho} onChange={handleChange} variant="standard" fullWidth
                sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
              />
              <TextField label="Alto" name="alto" value={formData.alto} onChange={handleChange} variant="standard" fullWidth
                sx={{ "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" }, "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" } }}
              />
            </Box>

            <TextField label="Descripción" name="descripcion" value={formData.descripcion} onChange={handleChange} variant="outlined" fullWidth multiline rows={2}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#f16436" }, "&:hover fieldset": { borderColor: "#f16436" }, "&.Mui-focused fieldset": { borderColor: "#f16436" } } }}
            />

            <Button variant="contained" fullWidth onClick={handleSubmit} disabled={loading}
              sx={{ bgcolor: "#f16436", "&:hover": { bgcolor: "#d9532e" }, mt: 1.5, py: 1.3, fontWeight: "bold", color: "white" }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "ENVIAR"}
            </Button>
          </Box>
        </Box>

        {/* Frase animada al hacer scroll */}
       <Box
  ref={fraseRef}
  sx={{
    flex: 1,
    display: { xs: "none", lg: "flex" },
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 2,
    maxWidth: "900px", // <--- limitar ancho máximo
    margin: "0 auto",   // <--- centrar
  }}
>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
              color: "#333",
              fontFamily: "Poppins, sans-serif",
              lineHeight: 1.4,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(50px)",
              transition: "all 1s ease-out",
            }}
          >
            Dale vida a tus espacios, a un solo clic de distancia.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
