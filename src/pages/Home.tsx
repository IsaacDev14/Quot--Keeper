
import QuoteCard from "../components/ QuoteCard";
import QuoteForm from "../components/QuoteForm";

const Home = () => {
  return (
    <>
      <div className="max-auto bg-gray-100  justify-center p-4 max-w-md w-full mx-auto mt-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Quote Keeper</h2>
        <QuoteForm />
        <QuoteCard />
      </div>
    </>
  );
};

export default Home;