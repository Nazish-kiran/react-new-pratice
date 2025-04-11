"use client";
import axios from "axios";

const page = () => {
  const getImages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list')
      const data = response.data;
    console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <>
      <div className="ms-4  mt-4">
        <h1 className="text-3xl mb-3">page</h1>
        <button
          onClick={getImages}
          className="px-5 py-3 bg-green-800 text-white font-bold"
        >
          Get Images
        </button>
        <div className="p-10"></div>
      </div>
    </>
  );
};

export default page;
