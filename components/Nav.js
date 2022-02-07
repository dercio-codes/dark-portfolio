import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailIcon from "@mui/icons-material/Email";
export default function Nav() {
  return (
    <Box
      style={{
        height: "100vh",
        background: "#111",
        flex: 1,
      }}
    >
      <img
        src="https://www.w3schools.com/w3images/man_smoke.jpg"
        alt=""
        style={{
          width: "100%",
          opacity:'0.5',
          filter:'greyscale(90%)'
        }}
      />
      <Box
        sx={{
          height: "65%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#eee",
            "&:hover": {
              background: "#222",
            },
          }}
        >
          <HomeIcon
            sx={{
              fontSize: 50,
              fill: "#eee",
            }}
          />
          <Typography variant="p">Home</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#eee",
            "&:hover": {
              background: "#222",
            },
          }}
        >
          <PersonIcon
            sx={{
              fontSize: 48,
              fill: "#eee",
            }}
          />
          <Typography variant="p">Home</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#eee",
            "&:hover": {
              background: "#222",
            },
          }}
        >
          <VisibilityIcon
            sx={{
              fontSize: 50,
              48: "#eee",
            }}
          />
          <Typography variant="p">Home</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#eee",
            "&:hover": {
              background: "#222",
            },
          }}
        >
          <EmailIcon
            sx={{
              fontSize: 48,
              fill: "#eee",
            }}
          />
          <Typography variant="p">Home</Typography>
        </Box>
      </Box>
    </Box>
  );
}
