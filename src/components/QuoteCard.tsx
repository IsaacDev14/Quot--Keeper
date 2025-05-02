import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Quote {
  id: number;
  text: string;
  author: string;
}

const QuoteCard = () => {
  const [likedQuotes, setLikedQuotes] = useState<{ [id: number]: boolean }>({});
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/68148bab8561e97a500c2b04")
      .then((res) => {
        const fetchedQuotes = res.data.record.quotes;
        setQuotes(fetchedQuotes);
      })
      .catch((err) => {
        console.error("Something went wrong:", err);
      });
  }, []);

  const togglelike = (id: number) => {
    setLikedQuotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="shadow border-gray-500 p-2 mt-4 bg-white rounded"
        >
          <div>
            <p>{quote.text}</p>
          </div>
          <div className="flex mt-2">
            <div className="flex-1/3">
              <p className="font-semi-expanded italic">{quote.author}</p>
            </div>
            <div className="flex gap-2 pr-2 ">
              <button
                onClick={() => togglelike(quote.id)}
                className="text-red-500 cursor-pointer"
              >
                {likedQuotes[quote.id] ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button className="text-blue-500 hover:text-blue-700 cursor-pointer">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700 cursor-pointer">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuoteCard;
