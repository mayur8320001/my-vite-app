import React from "react";
import { Box, Button, Typography, Container, ThemeProvider, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ServiceCards from "./Sevices";
import ImageSlideshow from "./ImageSlideshow";
import ContactUs from "./ContactUs";
import DescriptionIcon from '@mui/icons-material/Description'; // Icon for Project Consultation
import CodeIcon from '@mui/icons-material/Code'; // Icon for Software Development
import SettingsIcon from '@mui/icons-material/Settings'; // Icon for IT Infrastructure Management


const AnimatedBox = ({ children, initial, animate, transition, ...props }) => (
  <motion.div initial={initial} animate={animate} transition={transition} {...props}>
    {children}
  </motion.div>
);

const ServiceCard = ({ title, description,icon, delay }) => (
  <AnimatedBox
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "background.paper",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >  <Box sx={{ marginBottom: 1 }}>{icon}</Box>
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" marginTop={2}>
        {description}
      </Typography>
    </Box>
  </AnimatedBox>
);

const LandingPage = () => {
  const services = [
    {
      title: 'Project Consultation',
      description:
        'Our consultants can guide you through the selection and procurement of technology, as well as provide training and support for system implementation, operations and/or maintenance.',
      delay: 0.2,
      icon: <DescriptionIcon sx={{ fontSize: 40, color: 'primary.main' }} />, // Icon for Project Consultation
    },
    {
      title: 'Software Development',
      description:
        'With 50+ applications successfully delivered which including native, hybrid, and cross-platform. Aarkay IT Solutions offers you a creative and responsive Software which suits our clients’ requirements.',
      delay: 0.3,
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />, // Icon for Software Development
    },
    {
      title: 'IT Infrastructure Management',
      description:
        'Your IT infrastructure is expected to keep pace with digital diversity and new approaches while keeping an eye on legacy investments, cost pressure and rising customer expectations.',
      delay: 0.4,
      icon: <SettingsIcon sx={{ fontSize: 40, color: 'primary.main' }} />, // Icon for IT Infrastructure Management
    },
  ];
  const theme = useTheme(); 

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: 3, textAlign: "center" }}>
      <AnimatedBox initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Box sx={{p:4, borderRadius: "16px", backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : ''}}>
        <Typography variant="h3" fontWeight="bold">Welcome to Aarkay Tech Solutions</Typography>
        <Typography variant="h4" fontWeight="bold">Conjointly moving forward with Technology</Typography>  
        <Typography variant="h5" fontWeight="bold">
          Serving for 28 years, providing innovative IT solutions tailored to your needs.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/contact"
          sx={{ padding: "10px 30px", fontSize: "16px", borderRadius: "50px", boxShadow: 3 }}
        >
          Get in Touch
        </Button>
        </Box>
      </AnimatedBox>

      <Container sx={{ p: 2  }}>
      <Box sx={{p:4, borderRadius: "16px", backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : ''}}>
        <Typography variant="h4" fontWeight="bold">Our Services</Typography>
        <Typography variant="body1" fontWeight="bold">
          Enhancing business productivity through innovative, process-driven technology solutions.
        </Typography>
     
        <Box display="grid" sx={{ mt: 2 }} gridTemplateColumns={{ xs: "1fr",sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap={4}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </Box>
        </Box>
      </Container>
      <Box sx={{p:8, borderRadius: "16px",m:0, backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}}>
      <Typography variant="h4" sx={{ marginBottom: 0,marginTop: 3 }}>
            <strong>Here are our services </strong>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 0, fontWeight: "bold" }}>
            {" "}
            We deliver clients with innovative, process-driven technology
            solution which can help them to enhance business productivity,
            thereby enabling clients the opportunity. This will result into true
            cost savings in their unique operating environment.
          </Typography>
         
        <ServiceCards />
       </Box> 
      <Container sx={{ padding: 3, borderRadius: "16px", boxShadow: 5, backdropFilter: "blur(5px)" }}>
        {["customers", "partners"].map((type) => (
          <Box key={type} marginBottom={4}>
          
            <Typography variant="h4"  color="white" fontWeight="bold" >Our Trusted {type}</Typography>
            <Typography variant="body1"  color="white" fontWeight="bold">Creative organizations producing top-tier content</Typography>
          
            <ImageSlideshow imageDir={type} reverseDirection={type === "partners"} />
          </Box>
        ))}
      </Container>

      <Box bgcolor="secondary.main" color="white" padding={6} borderRadius={2} marginTop={2}>
        <AnimatedBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Typography variant="h5">Ready to Elevate Your Business?</Typography>
          <Typography variant="body1" marginBottom={4}>Connect with our experts for your digital transformation journey.</Typography>
          <Button variant="contained" color="primary" size="large" href="/contact" sx={{ padding: "10px 30px", fontSize: "16px", borderRadius: "50px", boxShadow: 3 }}>
            Contact Us
          </Button>
        </AnimatedBox>
      </Box>
      <Box bgcolor="transparent" color="white" padding={0} borderRadius={2} marginTop={1}>
        <AnimatedBox initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <ContactUs />
        </AnimatedBox>
      </Box>
    <ContactForm />
    </Box>
  );
};

export default LandingPage;    
