const QuestService = require("../services/QuestService");

exports.getAllQuests = async (req, res) => {
  try {
    const quests = await QuestService.getAllQuests();
    res.json({ data: quests, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuest = async (req, res) => {
  try {
    const quest = await QuestService.createQuest(req.body);
    res.json({ data: quest, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getQuestById = async (req, res) => {
  try {
    const quest = await QuestService.getQuestById(req.params.id);
    res.json({ data: quest, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateQuest = async (req, res) => {
  try {
    const quest = await QuestService.updateQuest(req.params.id, req.body);
    res.json({ data: quest, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuest = async (req, res) => {
  try {
    const quest = await QuestService.deleteQuest(req.params.id);
    res.json({ data: quest, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
