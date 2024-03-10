const Services = () => {
  return (
    <>
      <div className="main-container py-16">
        <h1 className="text-3xl font-bold text-center underline">
          My Services
        </h1>
        <div className="service-container space-x-5 px-6 flex mt-12 text-center">
          <div className=" crusor-pointer hover:bg-gray-200  space-y-3 bg-slate-100 p-5 shadow-lg rounded-xl service1 space-x-4">
            <i className=" text-3xl fa-brands fa-aws "></i>

            <h1 className="text-xl font-semibold text-center">
              Web Development
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>

            <button className="bg-sky-600 p-1 rounded-lg shadow-lg text-1xl hover:text-white">
              check
            </button>
          </div>
          <div className=" crusor-pointer  hover:bg-gray-200 space-y-3 bg-slate-100 p-5 shadow-lg rounded-xl service1 space-x-4">
            <i className="fa-solid fa-server text-3xl"></i>

            <h1 className="text-xl font-semibold text-center">
              Backend Development
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <button className="bg-sky-600 p-1 rounded-lg shadow-lg text-1xl hover:text-white">
              check
            </button>
          </div>
          <div className=" crusor-pointer hover:bg-gray-200  space-y-3 bg-slate-100 p-5 shadow-lg rounded-xl service1 space-x-4">
            <i className="fa-brands fa-react text-3xl"></i>

            <h1 className="text-xl font-semibold text-center">ReactJs Developer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <button className="bg-sky-600 p-1 rounded-lg shadow-lg text-1xl hover:text-white">
              check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
