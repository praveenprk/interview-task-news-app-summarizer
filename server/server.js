const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const PORT = 5250;

app.use(cors());

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new OpenAI({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

app.get('/news', async (req, res) => {
  const keyword = req.query.keyword;

  try {
    const newsResponse = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWS_API_KEY}`);
    const articles = newsResponse.data.articles;

    const summarizedArticles = await Promise.all(articles.map(async (article) => {
      const summary = await summarizeArticle(article.content);
      return {
        ...article,
        summary,
      };
    }));

    res.json({ articles: summarizedArticles });
  } catch (error) {
    console.error("Error fetching news or summarizing", error);
    res.status(500).send("Error fetching news or summarizing");
  }
});

const summarizeArticle = async (content) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // @TODO: https://stackoverflow.com/questions/77789886/openai-api-error-the-model-text-davinci-003-has-been-deprecated
      // prompt: `Summarize this article: ${content}`,
      messages: [{ role: "system", content: `Summarize the following news article: ${content}` }],
      max_tokens: 150,
    });
    console.log(`responses:`, response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error summarizing article", error);
    return "Summary not available";
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
