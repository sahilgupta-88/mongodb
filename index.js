const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin_Sahil:Mongodb8076@cluster0.at2orc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);


const main = async () => {
  await client.connect();
  const database =  client.db("shops");
  const collection = database.collection("products");
//   const data = await collection.find({ price: { $gt: 1200 } }).toArray();
    const data = await collection.aggregate([{$match:{price:{$gt:1200}}},{$sort:{price:-1}}]).toArray();

  console.log(data);
  
  return data;
}
main()
  .then(data=>console.log(data))
  .catch((e) => console.log(e))
  .finally(() => client.close);
