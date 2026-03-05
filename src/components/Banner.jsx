import gropPicO from "../assets/Group 2.png";
import gropPicT from "../assets/Group 1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="container mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
      {/* In Progress Card */}
      <div className="relative bg-linear-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl overflow-hidden">
        {/* Left Image */}
        <img src={gropPicO} alt="" className="absolute left-0 top-0 w-32 " />

        {/* Right Image */}
        <img
          src={gropPicT}
          alt=""
          className="absolute right-0 bottom-0 w-32 "
        />

        <div className="relative z-10 text-center">
          <h2 className="text-xl">In-Progress</h2>
          <p className="text-4xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div className="relative bg-linear-to-r from-green-400 to-teal-500 text-white p-8 rounded-xl overflow-hidden">
        {/* Left Image */}
        <img src={gropPicO} alt="" className="absolute left-0 top-0 w-32 " />

        {/* Right Image */}
        <img
          src={gropPicT}
          alt=""
          className="absolute right-0 bottom-0 w-32 "
        />

        <div className="relative z-10 text-center">
          <h2 className="text-xl">Resolved</h2>
          <p className="text-4xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
