import React from "react";
import { TextField, Button, MenuItem, Grid, Typography, Box } from "@mui/material";
import style from "./form.module.css";
import imgcortina from "../../assets/images/form.png";

const Form = () => {
  return (
    <div className={style.container}>
      <Grid container alignItems="center" justifyContent="center">
       
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 6, maxWidth: 350, margin: "0 auto", }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              Pedí tu Cotización
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
              }}
            >
              <TextField
                label="Nombre"
                variant="standard"
                fullWidth
                InputProps={{
                  disableUnderline: false,
                }}
                sx={{
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                }}
              />
              <TextField
                label="Teléfono"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                  "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                }}
              />
              <TextField
                label="Correo"
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

          
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <TextField
                  label="Ancho"
                  variant="standard"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root:before": { borderBottom: "1px solid #f16436" },
                    "& .MuiInputBase-root:after": { borderBottom: "2px solid #f16436" },
                  }}
                />
                <TextField
                  label="Alto"
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
                sx={{
                  bgcolor: "#f16436",
                  "&:hover": { bgcolor: "#d9532e" },
                  mt: 2,
                  boxShadow: "none",
                  py: 1.5,
                  fontWeight: "bold",
                }}
              >
                ENVIAR
              </Button>
            </Box>
          </Box>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imgcortina}
            alt="Cortina"
            sx={{ width: "800px", height: "380px", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
