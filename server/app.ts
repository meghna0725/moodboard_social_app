// server/app.ts
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectToDatabase, printCollectionContents } from './config/database';

// Load environment variables from .env in the parent directory
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(async (req, res, next) => {
    try {
      await connectToDatabase();
      await printCollectionContents();
    } catch (err) {
      console.error('Error handling database operations:', err);
    } finally {
      next(); // Pass control to the next middleware or route handler
    }
  });
  
  app.get('/', (req: Request, res: Response) => {
    res.send(`Hello, TypeScript Server! Running on port ${port}`);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });