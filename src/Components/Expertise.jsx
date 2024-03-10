import bannerBackground from "../assets/banner_wallpaper.svg"

const Expertise = () => {
  return (
    <>
   <div className="mt-3 ">
    <h1 className="text-3xl font-bold underline text-center mb-16"
    >My Expertise</h1>
    <div
    style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}  
    className="box-container  items-center flex py-16">
        <div className=" flex justify-center">
            <div className="w-2/3 text-center ">
            <h1 className="text-3xl font-lg space-y-3 text-white ">I love these Technologies</h1>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante. </p>
              <button className='bg-sky-600 p-1 m-1 rounded-lg shadow-lg text-1xl hover:text-white'
              >Hire Me</button>
            </div>
        </div>
        <div className="flex justify-center pl-8" >
            <div className="flex w-2/3 space-x-3 flex-wrap h-fit justify-center">
            <p className="bg-gray-300  mt-3 w-fit px-2 py-2 rounded-full hover:bg-sky-300 cursor-pointer ">HTML/HTML5</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">CSS/CSS3</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">JavaScript</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">Tailwind</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">React Js</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">Agile Methodology</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">BootStrap</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">Redux</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">Redux</p>
            <p className="bg-gray-300  mt-3 w-fit px-3 py-2 rounded-full hover:bg-sky-300 cursor-pointer">Redux</p>
            </div>

        </div>

    </div>

    </div>
    </>
  )
}

export default Expertise