import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="space-y-5 py-10 px-4">
      <div>
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          Name
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm"></span>
          </div>
          <input
            type="text"
            id="name"
            className="pl-7 rounded-md shoadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 appearance-none w-full px-3 py-2 border border-gray-300"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          Price
        </label>
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            type="text"
            placeholder="0.00"
            id="price"
            className="pl-7 rounded-md shoadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 appearance-none w-full px-3 py-2 border border-gray-300"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Description
        </label>

        <textarea
          className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-md border-gray-300 round focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Go Live
      </button>
    </div>
  );
};

export default Create;
