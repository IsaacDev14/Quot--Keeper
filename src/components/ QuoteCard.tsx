import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const QuoteCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="shadow border-gray-500 p-2 mt-4 bg-white rounded">
      <div>
        <p>
          "Success is not the key to happiness. Happiness is the key to success.
          If you love what you are doing, you will be successful. Don’t aim for
          success if you want it; just do what you love and believe in, and it
          will come naturally."
        </p>
      </div>
      <div className="flex mt-2">
        <div className="flex-1/3">
          <p className="font-semi-expanded italic">Albert Schweitzer</p>
        </div>
        <div className="flex gap-2 pr-2 ">
          <button onClick={() => setLiked(!liked)} className="text-red-500 cursor-pointer">
            {liked ? <FaHeart /> : <FaRegHeart />}
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
  );
};

export default QuoteCard;
