import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await storage.createProduct({
      name: "Sprinkler System",
      description: "High-precision injection mold for agricultural sprinkler systems.",
      moldImageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sprinkler+Mold",
      productImageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Final+Sprinkler",
      category: "Agricultural",
    });
    
    // Add a couple more examples to make it look good
    await storage.createProduct({
      name: "Automotive Connector",
      description: "Multi-cavity mold for electronic automotive components.",
      moldImageUrl: "https://placehold.co/600x400/e2e8f0/1e293b?text=Connector+Mold",
      productImageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Connector+Part",
      category: "Automotive",
    });
  }
}
