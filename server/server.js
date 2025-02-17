import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Path to products.json
const productsFilePath = path.join(__dirname, "products.json");

// Helper function to read products (asynchronous)
const readProducts = (callback) => {
  fs.readFile(productsFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading products:", err);
      callback([]); // Return an empty array if the file doesn't exist or there's an error
    } else {
      callback(JSON.parse(data));
    }
  });
};

// Helper function to write products (asynchronous)
const writeProducts = (products, callback) => {
  fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), (err) => {
    if (err) {
      console.error("Error writing products:", err);
      callback(false); // Indicate failure
    } else {
      callback(true); // Indicate success
    }
  });
};

// GET all products
app.get("/api/products", (req, res) => {
  readProducts((products) => {
    res.json(products);
  });
});

// POST a new product
app.post("/api/products", (req, res) => {
  const { name, price, image } = req.body;
  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ error: "Name, price, and image are required" });
  }

  readProducts((products) => {
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      image,
    };

    products.push(newProduct);

    writeProducts(products, (success) => {
      if (success) {
        res.status(201).json(newProduct);
      } else {
        res.status(500).json({ error: "Failed to save product" });
      }
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});