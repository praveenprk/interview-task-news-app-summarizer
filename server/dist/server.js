"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.get('/news', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = req.query.keyword;
    try {
        const newsResponse = yield axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${NEWS_API_KEY}`);
        const articles = newsResponse.data.articles;
        const summarizedArticles = yield Promise.all(articles.map((article) => __awaiter(void 0, void 0, void 0, function* () {
            const summary = yield summarizeArticle(article.content);
            return Object.assign(Object.assign({}, article), { summary });
        })));
        res.json({ articles: summarizedArticles });
    }
    catch (error) {
        console.error("Error fetching news or summarizing", error);
        res.status(500).send("Error fetching news or summarizing");
    }
}));
const summarizeArticle = (content) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // @TODO: https://stackoverflow.com/questions/77789886/openai-api-error-the-model-text-davinci-003-has-been-deprecated
            // prompt: `Summarize this article: ${content}`,
            messages: [{ role: "system", content: `Summarize the following news article: ${content}` }],
            max_tokens: 150,
        });
        console.log(`responses:`, response.choices[0].message.content);
        return response.choices[0].message.content;
    }
    catch (error) {
        console.error("Error summarizing article", error);
        return "Summary not available";
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
