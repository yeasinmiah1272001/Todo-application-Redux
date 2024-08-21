import { FaSpinner } from "react-icons/fa";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FaSpinner className="text-blue-500 text-4xl animate-spin" />
    </div>
  );
};

export default loading;
