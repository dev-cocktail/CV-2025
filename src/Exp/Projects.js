import { Box, Typography, Link } from "@mui/material";
import React from "react";

const projects = [
  {
    title: "Product Catalog Builder",
    company: "CyberCraft",
    role: "Lead Frontend Developer",
    type: "Product Catalog Creation Platform",
    period: "2023 - 2025",
    technologies: [
      "React",
      "Typescript",
      "MUI",
      "PWA",
      "JAVA",
      "Additional Libraries",
    ],
    description:
      "This project is a platform for quickly creating online product catalogs, each of which functions as a standalone website. All catalogs are managed through a single admin panel, which includes different levels of access for users. My role as a frontend developer involved creating a flexible, user-friendly interface for managing product catalogs, and implementing secure authentication and role-based access for the admin panel.",
    website: "https://alberto-bini.netlify.app",
  },
  {
    title: "Kaizen MRO",
    company: "CyberCraft",
    role: "Lead Frontend Developer",
    type: "Aviation Project Management Platform",
    period: "2022 - 2025",
    technologies: [
      "React",
      "Typescript",
      "MUI",
      "Firebase",
      "Additional Libraries",
    ],
    description:
      "This project is a management platform for Aviation MRO (Maintenance, Repair, and Overhaul) services. The application controls project management, staffing, and warehouse operations for aviation maintenance companies. As the lead frontend developer, I was responsible for implementing key features for managing projects, inventory, and workforce, ensuring seamless user experience and efficient data flow.",
    website: "", // Ссылка отсутствует
  },
  {
    title: "1Konnection",
    company: "CyberCraft",
    role: "Frontend Developer",
    type: "Real Estate Platform",
    period: "2022 - 2023",
    technologies: [
      "React",
      "React Native",
      "Typescript",
      ".NET",
      "Additional Libraries",
    ],
    description:
      "1Konnection is changing the way buyers find Senior Housing and Healthcare Real Estate deals by creating a centralized platform for discovering assisted living facilities and nursing homes for sale. Long Term Care Facilities are categorized as commercial real estate, but due to the uniqueness of having a business along with the Assisted Living or Nursing Home real estate, these facilities have to be sold in a confidential manner.",
    website: "", // Если сайт есть, добавь ссылку
  },
  {
    title: "Modularity",
    company: "CyberCraft",
    role: "Frontend Developer",
    type: "Business Management and Accounting Platform",
    period: "2021 - 2022",
    technologies: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Additional Libraries",
    ],
    description:
      "An All-In-One Modularity platform that helps managers control the company's costs. Features include headcount planning, efficient staffing, job posting automation, and procure-to-pay management. The platform gives managers access to everything needed for reporting, planning, and budgeting.",
    website: "", // Ссылка отсутствует
  },

  {
    title: "Icaria Health",
    company: "iCaria Health",
    role: "Frontend Developer",
    type: "Healthcare Management App",
    period: "2021 - 2021",
    technologies: ["React", "JavaScript", "MUI", "Additional Libraries"],
    description:
      "iCaria Health is an application that enables caregivers to review the health and wellness status of family members and loved ones. Features include reviewing tasks, appointments, diary entries, and communication with medical staff to support medication and treatment adherence.",
    website: "", // Ссылка будет добавлена позже
  },

  {
    title: "Slim Mum",
    company: "GoIT",
    role: "Full Stack Developer",
    type: "Pregnancy Health App",
    period: "2021 - 2021",
    technologies: ["React", "Node.js", "Redux", "Additional Libraries"],
    description:
      "An application designed to help expectant mothers track their diets during and after pregnancy. It offers personalized meal plans, nutritional advice, and a progress tracker.",
    website: "https://slim-mum.netlify.app/login",
  },

  {
    title: "Project Manager",
    company: "GoIT",
    role: "Frontend Developer",
    type: "Project Management Tool",
    period: "2021 - 2021",
    technologies: ["React", "Node.js", "Redux", "Additional Libraries"],
    description:
      "A project management application designed to manage projects from start to finish, set deadlines, track progress, and assign tasks.",
    website: "https://react-project-manager-app.netlify.app/registration",
  },
];

const Projects = () => {
  return (
    <Box>
      {/* Section Title */}
      <Box sx={{ mb: 1, display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            backgroundColor: "MidnightBlue",
            height: "24px",
            width: "40px",
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
          Selected Projects
        </Typography>
      </Box>

      {/* Projects List */}
      {projects.map((project) => (
        <Box key={project.title} sx={{ mb: 3 }}>
          {/* Header: Title + Date */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{ fontSize: { xs: "1.25rem", sm: "1.4rem" } }}
            >
              {project.website ? (
                <Link
                  href={project.website}
                  target="_blank"
                  underline="none"
                  color="primary"
                >
                  {project.title}
                </Link>
              ) : (
                <span>{project.title}</span> // Просто текст, если нет ссылки
              )}
            </Typography>

            <Typography variant="h6" color="MidnightBlue">
              {project.period}
            </Typography>
          </Box>

          {/* Company + Role */}
          <Typography variant="body1" fontWeight="bold" color="MidnightBlue">
            {project.company} – {project.role}
          </Typography>

          {/* Project Type */}
          <Typography
            variant="body2"
            color="GrayText"
            sx={{ fontStyle: "italic", mb: 1 }}
          >
            {project.type}
          </Typography>

          {/* Technologies */}
          <Typography variant="body2" color="GrayText" sx={{ mb: 1 }}>
            <b>Tech Stack:</b> {project.technologies.join(", ")}
          </Typography>

          {/* Description */}
          <Typography variant="body1">{project.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
