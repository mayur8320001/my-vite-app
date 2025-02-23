import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  // Sample products list (replace with actual data fetching logic)
  const products = [
    {
      title: "Sample Product",
      description: "This is a sample product description.",
      coverImage: "/placeholder.png",
    },
  ];

  const product = products[id]; // Get product by ID

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>;
  }

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Card sx={{ maxWidth: 500, mx: "auto", boxShadow: 5, p: 3 }}>
          <img
            src={product.coverImage}
            alt={product.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {product.description}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
              Back to Products
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ProductDetailsPage;
