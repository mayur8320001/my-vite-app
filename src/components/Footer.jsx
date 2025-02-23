import { Box, Typography, Grid, Button, Link } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import anime from 'animejs'; // Import anime.js
import { useEffect } from 'react'; // Use useEffect to trigger the animation

const Footer = () => {
  // Animation logic
  useEffect(() => {
    const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z";
    const wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
    const wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z";
    const wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

    anime({
      targets: '.wave-top > path',
      easing: 'linear',
      duration: 7500,
      loop: true,
      d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
      ],
    });
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto', // Push footer to the bottom
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
        position: 'relative', // Required for absolute positioning of the wave
        overflow: 'hidden', // Hide overflow from the wave
      }}
    >
      {/* Wave Animation */}
      {/* <svg className="wave-top" viewBox="0 0 1200 250" style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z"
          fill="#000747"
        />
      </svg> */}

      {/* Upper Footer: Social Links */}
      <Box sx={{ mb: 3, position: 'relative', zIndex: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Let's keep in touch!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Find us on any of these platforms. We respond within 1-2 business days.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            sx={{ color: 'white', mr: 2 }}
            startIcon={<FaFacebook />}
            href="https://www.facebook.com"
          />
          <Button
            sx={{ color: 'white', mr: 2 }}
            startIcon={<FaInstagram />}
            href="https://www.instagram.com"
          />
          <Button
            sx={{ color: 'white', mr: 2 }}
            startIcon={<FaLinkedin />}
            href="https://www.linkedin.com"
          />
          <Button
            sx={{ color: 'white', mr: 2 }}
            startIcon={<FaTwitter />}
            href="https://www.twitter.com"
          />
        </Box>
      </Box>

      {/* Useful Links and Other Resources */}
      <Grid container spacing={2} sx={{ mb: 3, position: 'relative', zIndex: 10,textAlign: 'center' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Useful Links
          </Typography>
          <ul style={{ listStyle: 'italic', padding: 0,  }}>
            <li>
              <Link href="#" color="inherit">About Us</Link>
            </li>
            <li>
              <Link href="/blog" color="inherit">Blog</Link>
            </li>
            <li>
              <Link href="/careers" color="inherit">Careers</Link>
            </li>
            <li>
              <Link href="/products" color="inherit">Products</Link>
            </li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Other Resources
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="#" color="inherit">Cookie Policy</Link>
            </li>
            <li>
              <Link href="#" color="inherit">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#" color="inherit">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" color="inherit">Career Policy</Link>
            </li>
          </ul>
        </Grid>
      </Grid>

      {/* Footer Copyright */}
      <Typography variant="body2" sx={{ mt: 2, position: 'relative', zIndex: 10 }}>
        Copyright © {new Date().getFullYear()} Aarkay Techno Consultants Pvt. Ltd. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;