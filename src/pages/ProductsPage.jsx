// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { motion } from 'framer-motion';
import matter from 'gray-matter';
import { Buffer } from "buffer"; // Ensure Buffer is available
import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
if (!window.Buffer) {
  window.Buffer = Buffer;
}

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const files = import.meta.glob("/public/products/**/*.md", { query: '?raw', import: 'default' });

      const items = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data } = matter(String(content)); // Ensure content is a string
          return { ...data, path };
        })
      );

      setProducts(items);
    };

    loadProducts();
  }, []);

  return products;
};

const ProductsPage = () => {
  const [filter, setFilter] = useState("all");
  const products = useProducts();
  const theme = useTheme();
  const navigate = useNavigate();

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
       <strong> Our Products</strong>
      </Typography>

      {/* Filter Buttons */}
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={(e, value) => value && setFilter(value)}
        sx={{
          marginBottom: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ToggleButton value="all">ALL</ToggleButton>
        <ToggleButton value="barcode-rfid-systems">BARCODE AND RFID SYSTEMS</ToggleButton>
        <ToggleButton value="customized-software">CUSTOMIZED SOFTWARE</ToggleButton>
        <ToggleButton value="sensors-and-devices">SENSORS AND DEVICES</ToggleButton>
      </ToggleButtonGroup>

      {/* Product Grid */}
      <Grid container spacing={2} justifyContent="center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    boxShadow: 5,
                    borderRadius: 3,
                    p: 1,
                    width: "100%",
                    textAlign: "center",
                    maxWidth: 340, // Adjust width
                    mx: "auto",
                    cursor: "pointer", // Make card clickable
                  }}
                  onClick={() => navigate(`/products/${index}`)}
                  >
                  {/* Mini Circle with Product Image */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      mb: 2,
                      border: `3px solid ${theme.palette.primary.main}`,
                      backgroundColor: "#fff",
                      boxShadow: 3,
                    }}
                  >
                    <img
                      src={product.coverImage || "/placeholder.png"}
                      alt={product.title}
                      style={{
                        width: "50%",
                        height: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Product Title */}
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      {product.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No products found
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default ProductsPage;