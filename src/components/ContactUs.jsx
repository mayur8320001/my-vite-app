import React from 'react';
import { Box, Typography, Button, Container, useTheme, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
import PhoneIcon from '@mui/icons-material/Phone'; // Phone icon
import EmailIcon from '@mui/icons-material/Email'; // Email icon

const ContactUsPage = () => {
  const theme = useTheme();

  // Function to handle location click (redirect to Google Maps)
  const handleLocationClick = () => {
    window.open(
      'https://www.google.com/maps/place/First+Floor,+I+Samarthnagar(W),+Ajni+Square,+Wardha+Road,+Nagpur+440015',
      '_blank'
    );
  };

  // Function to handle phone click (redirect to dialer)
  const handlePhoneClick = () => {
    window.open('tel:+917122252443', '_self');
  };

  // Function to handle email click (redirect to Gmail)
  const handleEmailClick = () => {
    window.open('mailto:info@atcgroup.co.in', '_blank');
  };

  return (
    <Box
      sx={{
        minHeight: '50vh', // Reduced height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2, // Reduced padding
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        {/* Heading */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
          We Would Love to Hear From You
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Whether you are curious about some product, service, or operation, we're ready to answer any and all questions.
        </Typography>

        {/* Grid Layout for Contact Details */}
        <Grid container spacing={4} justifyContent="center">
          {/* Location Section */}
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onClick={handleLocationClick}
            >
              <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, marginBottom: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Location
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                First Floor, I Samarthnagar(W), Ajni Square, Wardha Road, Nagpur 440015
              </Typography>
            </Box>
          </Grid>

          {/* Phone Section */}
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onClick={handlePhoneClick}
            >
              <PhoneIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, marginBottom: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Grow Your Market
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                +91 (712) 2252443 / 2251696
              </Typography>
            </Box>
          </Grid>

          {/* Email Section */}
          <Grid item xs={12} sm={4} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': { transform: 'scale(1.05)' },
              }}
              onClick={handleEmailClick}
            >
              <EmailIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, marginBottom: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Mail Us
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                info@atcgroup.co.in
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          sx={{
            padding: '8px 24px',
            fontSize: '14px',
            borderRadius: '50px',
            boxShadow: 3,
            marginTop: 4,
          }}
          onClick={handleEmailClick}
        >
          Send Us a Message
        </Button>
      </Container>
    </Box>
  );
};

export default ContactUsPage;