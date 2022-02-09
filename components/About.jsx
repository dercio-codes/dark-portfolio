import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <>
      <Box
        sx={{
          // border: "1px solid red",
          minHeight: "200vh",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#eee",
            margin: "16px 0",
          }}
        >
          My Name
        </Typography>
        <Box
          style={{
            width: "200px",
            height: "1px",
            background: "#eee",
            margin: "20px 0",
          }}
        ></Box>
        <Typography variant="p" sx={{ color: "#ccc", marginTop: "20px" }}>
          Some text about me. Some text about me. I am lorem ipsum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#eee",
            margin: "25px 0",
          }}
        >
          My Skills
        </Typography>

        <Typography
          variant="p"
          sx={{
            color: "#eee",
            margin: "16px 0",
          }}
        >
          Photography
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            background: "lightgrey",
            margin: "20px 0",
          }}
        >
          <Box
            sx={{ height: "100%", width: "90%", background: "darkgrey" }}
          ></Box>
        </Box>

        <Typography
          variant="p"
          sx={{
            color: "#eee",
            margin: "16px 0",
          }}
        >
          Web Design
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            background: "lightgrey",
            margin: "20px 0",
          }}
        >
          <Box
            sx={{ height: "100%", width: "85%", background: "darkgrey" }}
          ></Box>
        </Box>
        <Typography
          variant="p"
          sx={{
            color: "#eee",
            margin: "16px 0",
          }}
        >
          Photoshop
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            background: "lightgrey",
            margin: "20px 0",
          }}
        >
          <Box
            sx={{ height: "100%", width: "75%", background: "darkgrey" }}
          ></Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "150px",
            display: "flex",
            margin: "30px 0",
          }}
        >
          <Box
            sx={{
              height: "100%",
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "lightgrey",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              +11
            </Typography>
            <Typography variant="p" sx={{ color: "black" }}>
              Partners
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "lightgrey",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              +11
            </Typography>
            <Typography variant="p" sx={{ color: "black" }}>
              Partners
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "lightgrey",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              +11
            </Typography>
            <Typography variant="p" sx={{ color: "black" }}>
              Partners
            </Typography>
          </Box>
          <Box
            sx={{
              height: "100%",
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              background: "lightgrey",
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              +11
            </Typography>
            <Typography variant="p" sx={{ color: "black" }}>
              Partners
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ background: "grey", "&:hover": { background: "darkgrey" } }}
          startIcon={<DownloadIcon />}
        >
          Download Resume
        </Button>

        <Typography
          variant="h5"
          sx={{
            color: "#eee",
            margin: "25px 0",
          }}
        >
          My Price
        </Typography>

        <Box
          sx={{
            height: "auto",
            width: "100%",
            filter: "brightness(70%)",
            display: "flex",
            justifyContent: "space-between",
            "&:hover": {
              filter: "brightness(100%)",
            },
          }}
        >
          <Box sx={{ height: "100%", width: "465px", background: "lightgrey" }}>
            <Box
              sx={{
                height: "100px",
                width: "465px",
                background: "darkgrey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" sx={{ margin: "0 auto" }}>
                BASIC
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ margin: "0 auto" }}>
                $ 25
              </Typography>
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                per month
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  margin: "0 auto",
                  "&:hover": { background: "grey" },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          <Box sx={{ height: "100%", width: "465px", background: "lightgrey" }}>
            <Box
              sx={{
                height: "100px",
                width: "465px",
                background: "darkgrey",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="h6" sx={{ margin: "0 auto" }}>
                BASIC
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                Web Design
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" sx={{ margin: "0 auto" }}>
                $ 25
              </Typography>
              <Typography variant="p" sx={{ margin: "0 auto" }}>
                per month
              </Typography>
            </Box>
            <Box
              sx={{
                height: "70px",
                width: "465px",
                background: "lightgrey",
                border: "1px solid #c4c4c4",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  margin: "0 auto",
                  "&:hover": { background: "grey" },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: "#eee",
            margin: "25px 0",
          }}
        >
          My Reputation
        </Typography>
        <Box
          sx={{
            height: "300px",
            width: "100%",
            margin: "20px 0",
            display: "flex",
          }}
        >
          <Box sx={{ width: "15%" }}>
            <Box
              sx={{
                borderRadius: "100px",
                width: "100px",
                height: "100px",

                margin: "20px 0",
                background: `url(bandmember.jpg)`,
                backgroundSize: "cover",
              }}
            ></Box>
            <Box
              sx={{
                borderRadius: "100px",
                width: "100px",
                height: "100px",

                margin: "20px 0",
                background: `url(avatar_g2.jpg)`,
                backgroundSize: "cover",
              }}
            ></Box>
          </Box>
          <Box sx={{ width: "95%", padding: "40px 0" }}>
            <Box sx={{ height: "100px", color: "white" }}>
              <Typography variant="p" sx={{ color: "grey" }}>
                Chris Fox. CEO at Mighty Schools. John Doe saved us from a web{" "}
                <br /> <br />
                disaster
              </Typography>
            </Box>
            <Box sx={{ height: "100px", color: "white" }}>
              <Typography variant="p">
                Chris Fox. CEO at Mighty Schools. John Doe saved us from a web{" "}
                <br /> <br />
                disaster
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
