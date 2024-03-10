import { useState } from "react";
import bannerImage from "../assets/s3.jpg";

const About = () => {
    const[data]= useState({
        image:bannerImage,
        title:"Frontend Developer & ReactJs Developer",
        desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        illo fugit explicabo blanditiis enim quaerat dolorum fugiat ducimus
        minus ipsum.`,
        desc2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        illo fugit explicabo blanditiis enim quaerat dolorum fugiat ducimus
        minus ipsum.`,
    });
  return (
    <div className="main-container bg-gray-100 border py-16">
      <h1 className=" text-center text-4xl font-bold underline pb-16">About Me</h1>
      <div className="flex items-center">
        <div className=" w-full flex justify-center">
          <img className="rounded-full shadow-lg w-fit " src={data.image} alt="satyajit" />
        </div>
        <div className="w-full justify-center">
         <div className="space-y-5 w-2/3">
         <h1 className="text-4xl font-semibold ">{data.title}</h1>
          <p>{data.desc1}</p>
          <p>{data.desc2}</p>
          <button className="bg-sky-600 p-1 rounded-lg shadow-lg text-1xl hover:text-white">Read More..</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;
