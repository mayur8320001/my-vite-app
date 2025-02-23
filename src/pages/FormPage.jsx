import  { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Grid } from '@mui/material';
import { motion } from "framer-motion"; 

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <Container
      maxWidth="md"
      sx={{ padding: { xs: 2, sm: 4 }, textAlign: "center", marginTop: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            type="email"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default FormPage;
