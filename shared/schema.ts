import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  moldImageUrl: text("mold_image_url").notNull(),
  productImageUrl: text("product_image_url").notNull(),
  category: text("category").notNull(),
});

// === BASE SCHEMAS ===
export const insertProductSchema = createInsertSchema(products).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

// Request types
export type CreateProductRequest = InsertProduct;

// Response types
export type ProductResponse = Product;
export type ProductsListResponse = Product[];
