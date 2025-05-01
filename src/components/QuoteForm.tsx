const QuoteForm = () => {
  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Quote text"
          className="border border-gray-300 bg-white rounded px-2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Author"
          className="border border-gray-300 bg-white rounded px-2 text-gray-500"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-2 my-2 w-full rounded">Add Quote</button>
    </div>
  );
};

export default QuoteForm;
