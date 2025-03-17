import { Typography, Box } from "@mui/material";
import ProfessionalExp from "./ProfessionalExp";
import Projects from "./Projects";
import ResumeNotice from "./ResumeNotice";

const Exp = () => {
  return (
    <Box p={3}>
      <ResumeNotice />
      <ProfessionalExp />
      <Projects />
    </Box>
  );
};

export default Exp;
