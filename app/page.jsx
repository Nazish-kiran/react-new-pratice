"use client";
import { NewContext } from "@/Helper/Context";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [task, settask] = useState([]);

  const addTitle = (e) => {
    settitle(e.target.value);
  };
  const adddesc = (e) => {
    setdescription(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, description }]);
    settitle("");
    setdescription("");
    console.log(task);
  };
  const deleteHandler = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    settask(updatedTasks);
  };
  
  let renderTask = (
    <h2 className="text-3xl font-semibold">No Task Available</h2>
  );

  if (task.length !== 0) {
    renderTask = task.map((item, index) => {
      return (
        <div className="p-5" key={index}>
          <div className="bg-red-200 rounded">
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <button
            onClick={() => deleteHandler(index)}
            className="bg-red-500 px-4 py-2 rounded font-bold mt-2 text-white"
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <>
    <NewContext.Provider value={"hello"}>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Nazish's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          name=""
          id=""
          placeholder="Enter Title Here"
          value={title}
          onChange={addTitle}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          name=""
          id=""
          placeholder="Enter description Here "
          value={description}
          onChange={adddesc}
          />

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-red-200">{renderTask}</div>
          </NewContext.Provider>
    </>
  );
};

export default page;
