import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import storeController from "../controllers/storeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.editCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/del-crud", homeController.delCRUD);

  //Users
  router.post("/api/login", userController.handleLogin);
  router.get("/api/get-all-user", userController.getAllUser);
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);
  router.post("/api/admin-login", userController.handleAdminLogin);

  //Stores
  router.get("/api/get-all-store", storeController.handleGetAllStore);
  router.post("/api/create-new-store", storeController.handleCreateNewStore);
  router.put("/api/edit-store", storeController.handleEditStore);
  router.delete("/api/delete-store", storeController.handleDeleteStore);
  return app.use("/", router);
};

module.exports = initWebRoutes;
