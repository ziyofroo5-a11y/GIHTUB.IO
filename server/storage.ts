import { db } from "./db";
import {
  products,
  type InsertProduct,
  type Product
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }
}

export const storage = new DatabaseStorage();
