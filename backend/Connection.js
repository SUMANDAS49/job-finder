import mongoose from "mongoose";

export const mongoDbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/chakri")
    .then(() => {
      console.log("Yes, connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
