import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, LinkedIn, LocationOnOutlined, Pinterest, Twitter } from "@mui/icons-material";
import SendOutlined from "@mui/icons-material/SendOutlined";
import { PhoneRounded, EmailRounded } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack
        sx={{
          marginTop: "32px",
          marginBottom: "32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#eee",
            marginBottom: "16px",
          }}
        >
          Contact Me
        </Typography>
        <div
          style={{ width: "200px", height: "1px", background: "#eee" }}
        ></div>
      </Stack>

      <Stack>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <LocationOnOutlined sx={{ fill: "#eee", fontSize: "32px" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#aaa",
              marginLeft: "32px",
            }}
          >
            Philidelphia, North US
          </Typography>
        </Box>

        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <PhoneRounded sx={{ fill: "#eee", fontSize: "32px" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#aaa",
              marginLeft: "32px",
            }}
          >
            Phone: +00 151515
          </Typography>
        </Box>

        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <EmailRounded sx={{ fill: "#eee", fontSize: "32px" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#aaa",
              marginLeft: "32px",
            }}
          >
            Email: mail@mail.com
          </Typography>
        </Box>
      </Stack>
      <Stack
        sx={{
          marginTop: "16px",
        }}
      >
        <Typography variant="p" sx={{
          color:'#aaa'
        }}>
          Let's get in touch. Send me a message:
        </Typography>
      </Stack>

      <Stack
        sx={{
          marginTop: "16px",
        }}
      >
        <TextField
          label="Name"
          sx={{
            background: "white",
            // height:'48px',
            color: "black",
          }}
        />
      </Stack>

      <Stack
        sx={{
          marginTop: "16px",
        }}
      >
        <TextField
          label="Email"
          sx={{
            background: "white",
            // height:'48px',
            color: "black",
          }}
        />
      </Stack>

      <Stack
        sx={{
          marginTop: "16px",
        }}
      >
        <TextField
          label="Subject"
          sx={{
            background: "white",
            // height:'48px',
            color: "black",
          }}
        />
      </Stack>

      <Stack
        sx={{
          marginTop: "16px",
        }}
      >
        <TextField
          label="Message"
          sx={{
            background: "white",
            // height:'48px',
            color: "black",
          }}
        />
      </Stack>

      <Button
        variant="filled"
        sx={{
          background: "white",
          marginTop: "32px",
          color: "black",
          width: "180px",
          padding: "16px",
          "&:hover": {
            background: "black",
            color: "white",
          },
        }}
      >
        <SendOutlined />
        Submit
      </Button>

      <Box sx={{
        display:'flex',
        marginTop:'64px',
        marginBottom:'32px',
      }}>
        <Facebook sx={{
          fill:'#aaa'
        }}/>
        <Instagram sx={{
          fill:'#aaa'
        }}/>
        <Pinterest sx={{
          fill:'#aaa'
        }}/>
        <Twitter sx={{
          fill:'#aaa'
        }}/>
        <LinkedIn sx={{
          fill:'#aaa'
        }}/>
      </Box>
      <Typography sx={{
        color:'#aaa'
      }}>
        Powered by w3.css
      </Typography>
    </Box>
  );
}
