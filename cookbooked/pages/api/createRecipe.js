import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
    console.log("IN CREATE RECIPE ROUTE")
       const client = await clientPromise;
       const db = client.db("data");

       const recipes = await db
           .collection("library")
           .insertOne({test: req.body})

           console.log("AFTER INSERT IN CREATE RECIPE")

       res.json(recipes);
   } catch (e) {
       console.error(e);
   }
};