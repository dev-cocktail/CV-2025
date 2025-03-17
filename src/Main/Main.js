import { Avatar, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GitHub, LinkedIn, Email, Phone } from "@mui/icons-material";
import { FaSkype, FaTelegram } from "react-icons/fa"; // Иконки из react-icons
import backgroundImage from "./background.jpg";

const contacts = [
  {
    icon: <Email fontSize="small" />,
    href: "mailto:dmytro.orgish88@gmail.com",
    text: "dmytro.orgish88@gmail.com",
  },
  {
    icon: <Phone fontSize="small" />,
    href: "tel:+380668652127",
    text: "+380668652127",
  },
  {
    icon: <GitHub fontSize="small" />,
    href: "https://github.com/dev-cocktail",
    text: "dev-cocktail",
  },
  {
    icon: <LinkedIn fontSize="small" />,
    href: "https://www.linkedin.com/in/dmytro-orhish-b60a781bb",
    text: "dmytro-orhish-b60a781bb",
  },
  {
    icon: <FaTelegram size={18} />,
    href: "https://t.me/DMTRORGSH",
    text: "@DMTRORGSH",
  },
  {
    icon: <FaSkype size={18} />,
    href: "skype:dmytro.orgish88@gmail.com?chat",
    text: "dmytro.orgish88@gmail.com",
  },
];

const Main = () => {
  return (
    <Grid
      size={12}
      sx={{
        background: `linear-gradient(to bottom, rgba(53, 44, 114, 0.99), rgba(53, 44, 114, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "auto", md: 250 },
      }}
    >
      <Grid container sx={{ px: 2, height: "100%" }}>
        <Grid
          size={8}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid container sx={{ color: "GhostWhite" }} p={2}>
            {/* Контакты */}

            {contacts?.map(({ href, icon, text }) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                display="flex"
                alignItems="center"
                gap={1}
                my={0.25}
              >
                {icon}
                <Link
                  href={href}
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
                    {text}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} p={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="LightSkyBlue"
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              Front End Developer
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="GhostWhite"
              sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
            >
              Dmytro Orgish
            </Typography>
          </Grid>
        </Grid>
        <Grid
          size={4}
          display="flex"
          justifyContent="flex-end"
          position="relative"
          sx={{
            alignItems: { xs: "flex-end", md: "center" },
          }}
        >
          <Avatar
            variant="square"
            alt="Мое фото"
            src={require("./ava.jpg")}
            sx={{
              width: { xs: "100%", lg: "auto" },
              height: "auto",
              position: { lg: "absolute" },
              top: { lg: "-16px" },
              border: { lg: "12px solid GhostWhite" },
              mb: { xs: 2, md: 0 },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
