import { Alert, Box, Typography, IconButton, Collapse } from "@mui/material";
import { Close } from "@mui/icons-material"; // Иконка для закрытия
import { useState } from "react";

const ResumeNotice = () => {
  const [open, setOpen] = useState(true); // Состояние для отображения/скрытия алерта

  const handleClose = () => {
    setOpen(false); // Скрываем алерт при нажатии на крестик
  };

  return (
    <Box sx={{ mb: 1, mt: -1, display: { xs: "none", md: "block" } }}>
      <Collapse in={open} timeout={500}>
        <Alert
          severity="info"
          sx={{ backgroundColor: "#e3f2fd", color: "#0d47a1" }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose} // Обработчик закрытия
            >
              <Close />
            </IconButton>
          }
        >
          <Typography variant="body1" fontWeight="bold">
            This CV is a live example of my frontend work, developed with React
            to showcase some of my technical abilities.
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ResumeNotice;
