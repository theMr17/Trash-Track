const express = require("express");
const {
  getAllQuests,
  createQuest,
  getQuestById,
  updateQuest,
  deleteQuest,
} = require("../controllers/QuestController");

const router = express.Router();

router.route("/").get(getAllQuests).post(createQuest);
router.route("/:id").get(getQuestById).put(updateQuest).delete(deleteQuest);

module.exports = router;
