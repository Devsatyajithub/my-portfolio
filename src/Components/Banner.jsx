import bannerImage from "../assets/s1.jpeg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);
  useEffect(() =>{
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "ReactJs Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true, // Loop animation

    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  

  return (
    <div 
    style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}   
    className="flex items-center">
      <div className=" w-full flex items-center justify-center  text-white">
        <div className="w-2/3  space-y-4 ms-8">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl font-bold">Satyajit Nayak</h1>
          <h2 className="text-xl ">
           I am  <span className="font-semibold underline" ref={el}></span></h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, nemo. Omnis quis reprehenderit aspernatur culpa
            inventore rem, illum iure optio et blanditiis quia alias
            consequuntur totam dicta vel molestiae. Odio laboriosam quisquam,
            exercitationem omnis numquam vero nesciunt explicabo incidunt vel
            eaque a repellat nisi, debitis repudiandae excepturi quasi
            praesentium id!
          </p>
          <div className="icons-container space-x-5">
          <i className="fa-brands text-3xl fa-facebook"></i>
          <i className="fa-brands text-3xl fa-linkedin-in"></i>
          <i className="fa-brands text-3xl fa-instagram"></i>

          </div>
          <br></br>
          <a  className="bg-sky-600 p-1 rounded-lg shadow-lg text-1xl hover:text-white" 
          href="/">Contact Me</a>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <img className="rounded-full shadow-lg w-fit my-2 " src={bannerImage} />
      </div>
    </div>
  );
};
export default Banner;
