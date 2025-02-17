import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001; // You can use any port

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase URL-encoded payload limit

// Sample product data
const product = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// Example route
app.get("/api/products", (req, res) => {
  res.json(product);
});

app.post("/api/products", (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ error: "Name, price, and image are required" });
  }

  const newProduct = {
    id: product.length + 1,
    name,
    price: parseFloat(price),
    image,
  };

  product.push(newProduct);
  res.status(201).json(newProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
