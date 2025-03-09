import { Link } from "react-router";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between py-3 px-4">
        <div className="text-center flex-grow">
          <Link to="/collections/all" className="hover:underline">
            New In: Shop Spring Summer 2025
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
