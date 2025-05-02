// import { useState } from "react";

// type Quote = {
//   quote: string;
//   author: string;
// };

// const QuoteForm = () => {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");
//   const [quoteData, setQuoteData] = useState<Quote[]>([]);

//   const handleAddQuote = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const newQuote = { quote, author };
//     setQuoteData((prev) => [...prev, newQuote]);
//     setQuote("");
//     setAuthor("");
//   };

//   return (
//     <form className="bg-white p-5 rounded shadow" onSubmit={handleAddQuote}>
//       <div className="flex flex-col gap-3">
//         <input
//           type="text"
//           placeholder="Quote text"
//           value={quote}
//           onChange={(e) => setQuote(e.target.value)}
//           className="border border-gray-300 bg-white rounded px-2 text-gray-500"
//         />
//         <input
//           type="text"
//           placeholder="Author"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           className="border border-gray-300 bg-white rounded px-2 text-gray-500"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-2 my-2 w-full rounded cursor-pointer hover:bg-blue-700"
//       >
//         Add Quote
//       </button>
//     </form>
//   );
// };

// export default QuoteForm;
