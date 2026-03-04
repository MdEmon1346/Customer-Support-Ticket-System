const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="container mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
      <div className="bg-linear-to-r from-purple-500 to-indigo-600 text-white p-8 rounded-xl text-center">
        <h2 className="text-xl">In-Progress</h2>
        <p className="text-4xl font-bold">{inProgressCount}</p>
      </div>

      <div className="bg-linear-to-r from-green-400 to-teal-500 text-white p-8 rounded-xl text-center">
        <h2 className="text-xl">Resolved</h2>
        <p className="text-4xl font-bold">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
