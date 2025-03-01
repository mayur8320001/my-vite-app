import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, InputAdornment,Grid } from '@mui/material';
import { Email, Person, Message } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        'your_user_id'
      );
      setSuccess(true);
      setError('');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send the message. Please try again later.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 700,
          margin: '20px auto',
          padding: 4,
          boxShadow: 4,
          borderRadius: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Contact Us
        </Typography>

        {success && <Alert severity="success">Message sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
         
         <Grid> 
                   </Grid>

        <TextField
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Message />
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: '25px',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          Send Message
        </Button>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
