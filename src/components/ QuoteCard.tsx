import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaHeart, FaRegHeart } from "react-icons/fa";
import { getQuotes } from "../api/quotesApi";
import { AxiosResponse } from "axios";



interface Quote {
  id: number;
  quote: string;
  author: string;
  liked?: boolean;
}

const QuoteCard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    getQuotes()
      .then((res: AxiosResponse<Quote[]>) => {
        const likedQuotes = res.data.map((q: Quote) => ({
          ...q,
          liked: false,
        }));
        setQuotes(likedQuotes);
      })
      .catch((err: unknown) => {
        console.error("Failed to fetch quotes:", err);
      });
  }, []);
  

  const toggleLike = (id: number) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote) =>
        quote.id === id ? { ...quote, liked: !quote.liked } : quote
      )
    );
  };

  return (
    <>
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="shadow border border-gray-300 p-4 mt-4 bg-white rounded"
        >
          <div>
            <p>{quote.quote}</p>
          </div>
          <div className="flex mt-2 justify-between items-center">
            <p className="font-semibold italic text-gray-600">{quote.author}</p>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => toggleLike(quote.id)}
                className="text-red-500 hover:scale-110"
              >
                {quote.liked ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuoteCard;
