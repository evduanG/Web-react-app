import { MongoClient, Db } from "mongodb";

let dbConnection: Db | null = null;

interface DatabaseModule {
  connectToDb: (cb: (error?: any) => any) => void;
  getDb: () => Db | null;
}

const databaseModule: DatabaseModule = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://127.0.0.1:27017/liquorStore")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log("error connecting to the db:", err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};

export default databaseModule;