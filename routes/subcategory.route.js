const express = require("express");
const { subcategoryController } = require("../controllers");

const route = express.Router();

route.post("/add", subcategoryController.addSubcategory);
route.get("/get", subcategoryController.getSubcategory);
route.delete("/delete/:id", subcategoryController.deleteSubcategory);
route.put("/update/:id", subcategoryController.updateSubcategory);

module.exports = route;