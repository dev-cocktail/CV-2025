import { Box, Typography } from "@mui/material";
import React from "react";

const workExperience = [
  {
    title: "CyberCraft",
    position: "Frontend Developer",
    period: "2021 - 2025",
    description:
      "Currently working as a frontend developer at CyberCraft, contributing to the development of web applications with a focus on React.",
  },
  {
    title: "iCaria Health",
    position: "Frontend Developer",
    period: "2021 - 2021",
    description:
      "Worked as a frontend developer for iCaria Health, focusing on building and maintaining user interfaces for healthcare applications.",
  },
  {
    title: "GoIT Bootcamp",
    position: "FullStack Developer (React JS + Node JS)",
    period: "2020 - 2021",
    description:
      "Completed a full-stack development bootcamp focusing on React JS and Node JS, gaining skills in frontend and backend development.",
  },
];

const ProfessionalExp = () => {
  return (
    <>
      <Box
        sx={{
          mb: 1,
          display: "flex",
          alignItems: "center",
          mt: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(53, 44, 114, 0.95)",
            height: "24px",
            width: "40px", // Уменьшаем левый бокс
            mr: 1,
            ml: -6,
          }}
        />

        <Typography
          fontWeight="bold"
          color="MidnightBlue"
          sx={{
            flexShrink: 0,
            textTransform: "uppercase",
            fontSize: { xs: "1.25rem", sm: "2rem" },
          }}
        >
          Professional Experience
        </Typography>
      </Box>
      {workExperience?.map(({ title, description, period, position }) => (
        <Box mb={2} key={title}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" fontWeight="bold">
              {title}
            </Typography>
            <Typography variant="h6" color="MidnightBlue">
              {period}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="MidnightBlue"
            sx={{ mb: 1, lineHeight: 1.2 }}
          >
            {position}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      ))}
    </>
  );
};

export default ProfessionalExp;
