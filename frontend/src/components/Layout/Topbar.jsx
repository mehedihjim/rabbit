import { Link } from "react-router";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between py-3 px-4">
        <div className="text-center flex-grow">
          <Link to="/newsletter" className="hover:underline">
            Sign up for exclusive updates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
