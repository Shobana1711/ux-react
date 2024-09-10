import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function HalfRating() {
  return (
      <Box>
      <Typography
                variant="h6"
                gutterBottom
                sx={{
                  "&.MuiTypography-root": {
                    fontFamily: "cursive",
                    fontWeight: "600",
                    fontSize: "18px",
                  },
                }}
              >
                Customer's Feedback
              </Typography>
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                <Avatar alt="Remy Sharp" src="./img/avatar/1.jpg" />
                </div>
                <div className="paddingall">
                  <span className="pricetitle">
                    Tiji Oommen
                  </span>
                </div>
                </Stack>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <Typography>Good health drives the growth of the nation.</Typography>
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                <Avatar alt="Remy Sharp" src="./img/avatar/2.jpg" />
                </div>
                <div className="paddingall">
                  <span className="pricetitle">
                    Ramachandran
                  </span>
                </div>
                
              </Stack>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <Typography>Good health drives the growth of the nation.</Typography>
              <Stack spacing={2} direction="row">
                <div className="iconstyle">
                <Avatar alt="Remy Sharp" src="./img/avatar/3.jpg" />
                </div>
                <div className="paddingall">
                  <span className="pricetitle">
                    Thailand Ganachari
                  </span>
                </div>
                
              </Stack>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <Typography>Good health drives the growth of the nation.</Typography>
              </Box>
  );
}



      