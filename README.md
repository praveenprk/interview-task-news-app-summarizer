# AI-Powered News Search and Summarizer Application 

This project is an AI-powered news search application that allows users to search for news articles using a keyword. The application leverages a third-party news API for fetching news articles and uses OpenAI's API to summarize the content of the articles.

## Features

- Search for news articles using a keyword.
- Display a list of news articles based on the search keyword.
- Each article shows the title, source, publication date, and a summary provided by the AI/ML feature.
- Loading indicator while fetching news articles.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a NewsAPI key.
- You have an OpenAI API key.

## Setup Instructions

### Backend Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/praveenprk/interview-task-news-app-summarizer.git
    cd interview-task-news-app-summarizer
    ```

2. **Install server/backend dependencies**:
    ```sh
    cd server
    npm install
    ```

3. **Create a `.env` file in the `server` directory** and add your API keys:
    ```
    NEWS_API_KEY=your_news_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

4. **Start the backend server**:
    ```sh
    npm start
    ```

    The backend server will start at `http://localhost:5250`.

### Frontend Setup

1. **Navigate to the `client` directory**:
    ```sh
    cd ../client
    ```

2. **Install client/frontend dependencies**:
    ```sh
    npm install
    ```

3. **Start the client/frontend application**:
    ```sh
    npm start
    ```

    The frontend application will start at `http://localhost:3000`.

## API Endpoints

### Backend API

- **GET /news**
    - Description: Fetch news articles based on a search keyword.
    - Query Parameters:
        - `keyword` (string): The keyword to search for news articles.
    - Example Request:
        ```
        GET http://localhost:5250/news?keyword=technology
        ```
    - Example Response:
        ```json
        {
          "articles": [
            {
              "title": "Example News Title",
              "source": "Example Source",
              "publishedAt": "2024-07-23T10:00:00Z",
              "summary": "This is an example summary of the news article."
            }
          ]
        }
        ```

## Running the Application

1. **Start the backend server** (if not already started):
    ```sh
    cd server
    npm start
    ```

2. **Start the frontend application** (if not already started):
    ```sh
    cd client
    npm start
    ```

3. **Access the application**:
    Open your web browser and navigate to `http://localhost:3000`.

4. **Search for news articles**:
    - Enter a keyword in the search bar and click the "Search" button.
    - The application will display a list of news articles based on the search keyword, each with a title, source, publication date, and summary.

## Note

The API Keys are stored in an .env for security reasons and to demonstrate my approach to handling secrets. Let me know how would you like to receive the API keys assuming you want to use my keys or you are fine with just the hardcoded value for the time being.
