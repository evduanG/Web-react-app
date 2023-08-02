import { Request, Response } from "express";
import { MongoClient, Collection, Db } from "mongodb";

import * as fs from "fs";

class ProxySrever{
  private dbConnection: Db | null = null;
  public collection(params:string) {
    
  }

  private loadData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }
}




// Function to load data from the JSON file


// Simulate the find operation with the loaded data
// export async function findAlcohols(req: Request, res: Response): Promise<void> {
//   try {
//     const data = await loadData();
//     const alcohols: any[] = [];

//     data.forEach((alcohol) => {
//       if (alcohol.category === "Alcohol") {
//         alcohols.push(alcohol);
//       }
//     });

//     res.status(200).json(alcohols);
//   } catch (error) {
//     res.status(500).json({ error: "Could not fetch the documents" });
//   }
// }











































// import { MongoClient, Collection, Db } from "mongodb";

// class MongoDBProxy {
//   private dbConnection: Db | null = null;

//   async connectToDb(url: string): Promise<void> {
//     try {
//       const client = await MongoClient.connect(url);
//       this.dbConnection = client.db();
//     } catch (error) {
//       console.log("Error connecting to the database:", error);
//       throw error;
//     }
//   }

//   getDb(): Db {
//     if (!this.dbConnection) {
//       throw new Error("Database connection not established.");
//     }
//     return this.dbConnection;
//   }

//   getCollection<T>(collectionName: string): Collection<T> {
//     if (!this.dbConnection) {
//       throw new Error("Database connection not established.");
//     }
//     return this.dbConnection.collection<T>(collectionName);
//   }
// }

// export default MongoDBProxy;


