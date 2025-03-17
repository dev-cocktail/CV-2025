import { Typography, Box, LinearProgress, Divider } from "@mui/material";

const Skills = () => {
  const skills = [
    { name: "HTML5", value: 10 },
    { name: "CSS3", value: 10 },
    { name: "JavaScript (ES6+)", value: 10 },
    { name: "TypeScript", value: 10 },
    { name: "React.js", value: 10 },
    { name: "React Native", value: 8 },
    { name: "Next.js", value: 8 },
    { name: "Vue", value: 6 },
    { name: "Redux", value: 5 },
    { name: "Node.js", value: 5 },
  ];

  const add_skills = [
    { name: "Material-UI (MUI)", value: 10 },
    { name: "Tailwind", value: 8 },
    { name: "Jira", value: 10 },
    { name: "Trello", value: 10 },
    { name: "Figma", value: 9 },
    { name: "Git", value: 9 },
    { name: "Firebase", value: 8 },
    { name: "Postman", value: 7 },
    { name: "Webpack", value: 7 },
    { name: "Docker", value: 5 },
  ];

  return (
    <Box
      p={2}
      sx={{
        background: "GhostWhite",
        pt: { xs: 2, lg: 16 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
      }}
    >
      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          About
        </Typography>
        <Box>
          <Typography variant="body1">
            Experienced Front-end Developer specializing in React.js, React
            Native, Next.js, and TypeScript. Involved in the full development
            cycle, including architecture, code review, performance
            optimization, and backend integration. Worked both in teams and
            independently, fully developing front-end parts of projects.
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "column",
            lg: "column",
          },
          justifyContent: "space-around",
          alignItems: "stretch",
          gap: 1,
        }}
      >
        <Box sx={{ minWidth: "50%" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Main Skills Experience
          </Typography>
          <Box>
            {skills.map((skill) => (
              <Box key={skill.name} sx={{ mb: 2 }}>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(skill.value / 10) * 100}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ minWidth: "50%" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Additional Skills Experience
          </Typography>
          <Box>
            {add_skills.map((skill) => (
              <Box key={skill.name} sx={{ mb: 2 }}>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {skill.name}
                </Typography>
                <LinearProgress
                  color="success"
                  variant="determinate"
                  value={(skill.value / 10) * 100}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    opacity: 0.5,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Divider />
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Education
        </Typography>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            GOIT.UA - BOOTCAMP IT
          </Typography>
          <Typography variant="body2" color="textSecondary">
            October 2020 - June 2021
          </Typography>
          <Typography variant="body1">
            Full-stack Developer — Studied HTML5, CSS3, JavaScript, React.js,
            Node.js
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" fontWeight="bold">
            National Aviation University (Ukraine)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            September 2005 - July 2011
          </Typography>
          <Typography variant="body1">
            Degree in Manufacture, Maintenance, and Repair of Aircraft
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" fontWeight="bold">
            Gymnasium 6 (Ukraine)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            September 1995 - June 2005
          </Typography>
          <Typography variant="body1">
            Profile: Mathematics and Economics
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
