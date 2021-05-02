const express = require("express");
const router = express.Router();

const {
  createNewCelebrity,
  getAllCelebrties,
  deleteCelebrity,
  singleCelebrity
} = require("../controllers/CelebrityController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router
  .route("/admin/celebrity/deleteCelebrity")
  .post(isAuthenticatedUser, deleteCelebrity);
router
  .route("/admin/celebrity/createNewCelebrity")
  .post(isAuthenticatedUser, createNewCelebrity);
router.route("/admin/celebrities").get(isAuthenticatedUser, getAllCelebrties);
router.route("/celebrities").get(getAllCelebrties);
router.route("/celebrities/singleCelebrity").get(singleCelebrity);

module.exports = router;
