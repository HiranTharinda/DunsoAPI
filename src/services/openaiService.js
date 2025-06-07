const axios = require('axios');

class OpenAIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openai.com/v1/chat/completions';
  }

  async generateCompletion(prompt) {
    const response = await axios.post(
      this.baseUrl,
      {
        model: 'gpt-4.1-nano',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  }
}

module.exports = OpenAIService;