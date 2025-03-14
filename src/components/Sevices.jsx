import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import matter from 'gray-matter';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      const files = import.meta.glob('/services_posts/**/*.md', { as: 'raw' });

      const items = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data } = matter(content);
          return { ...data, path };
        })
      );

      setServices(items);
    };

    loadServices();
  }, []);

  return services;
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={cardVariants}>
      <Card sx={{p:0, maxWidth: 345, margin: 'auto', borderRadius: '16px', boxShadow: 3, backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
        <CardMedia 
           sx={{transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },}}
          component="img"
          height="140"
          image={service.coverImage}
          alt={service.title}
        />
        
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div" color="">
            {service.title}
          </Typography>
          <Typography variant="body2" color="">
            {service.excerpt}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = useServices();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px', padding: '5px' }}>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceCards;
