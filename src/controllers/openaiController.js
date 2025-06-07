const OpenAIService = require('../services/openaiService');
const openaiService = new OpenAIService(process.env.OPENAI_API_KEY);

exports.getCompletion = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const completion = await openaiService.generateCompletion(prompt);
    res.json({ completion });
  } catch (err) {
    next(err);
  }
};