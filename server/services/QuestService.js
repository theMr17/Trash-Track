const Quest = require("../models/Quest");

exports.getAllQuests = async () => {
  return await Quest.find();
};

exports.createQuest = async (quest) => {
  return await Quest.create(quest);
};
exports.getQuestById = async (id) => {
  return await Quest.findById(id);
};

exports.updateQuest = async (id, quest) => {
  return await Quest.findByIdAndUpdate(id, quest);
};

exports.deleteQuest = async (id) => {
  return await Quest.findByIdAndDelete(id);
};
