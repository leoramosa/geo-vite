import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">
        <button className="bg-[#0070f3] text-white px-4 py-2 rounded mt-4">
          Go back to the homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
