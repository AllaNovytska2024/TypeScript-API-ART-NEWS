import { useEffect, useState } from "react";
import MyButton from "../../forms/myButton/MyButton";
import Feedback from "../../forms/feedback/Feedback";
import "./fetchArtApiNews.css";
// import gif from "../gift/giftFales/myGifts/glitter-ball-10892_128.gif"

interface IArticle {
  title: string;
  author: string;
  description: string;
  source: { name: string };
  publishedAt: string;
  content: string;
  urlToImage: string;
  //  message: string | option;
}

interface IApiResponse {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

export default function FetchArtNews() {
  const [artNews, setArtNews] = useState<IArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchArtNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=art&from=2024-09-28&sortBy=publishedAt&apiKey=a0713f75db1548e9bc1f7510938d863b"
      );
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      const data: IApiResponse = await response.json();
      setArtNews(data.articles);
    } catch (error) {
      setError("Ошибка сети");
    }
  };

  useEffect(() => {
    fetchArtNews();
  }, []);

  return (
    <body>
      <header>
        <div>
          <h1 className="font-effect-fire-animation">
            {" "}
            TypeScript-API-ART-NEWS
          </h1>
          <h2>Alla Novytska practice Type Script API @2024</h2>
        </div>
        <div className="but-position">
          <MyButton
            isPrimary={true}
            text="ОБНОВИ НОВОСТИ"
            onClick={fetchArtNews}
          />
        </div>
      </header>

      <main>
        <div className="container-art">
          {error && <p>{error}</p>}
          {artNews.length > 0 ? (
            artNews.map((news, index) => (
              <div key={index} className="art-card">
                <img
                  className="art-card-img"
                  src={news.urlToImage}
                  alt={news.title}
                />
                <h2>{news.title}</h2>
                <p>{news.description}</p>
                <p>
                  <strong>Автор:</strong> {news.author}
                </p>
                <p>
                  <strong>Источник:</strong> {news.source.name}
                </p>
                <p>
                  <strong>Опубликовано:</strong> {news.publishedAt}
                </p>
                <p>{news.content}</p>
              </div>
            ))
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
      </main>
    </body>
  );
}
