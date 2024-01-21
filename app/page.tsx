import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-screen h-screen bg-black flex justify-center items-center">
      <div className=" space-y-7 w-10/12 min-[400px]:w-96 bg-[#1f1f1f] p-7 rounded-xl"> 
        <div className=" flex justify-center items-center">
          <Image
          src={"/images/avatar-jessica.jpeg"}
          width={176}
          height={176}
          className=" w-20 h-20 rounded-full"
          alt="avatar"/>
        </div>
        <div className=" space-y-2">
          <div className=" text-white text-2xl text-center font-bold">
            Jessica Randall
          </div>
          <div className=" text-center font-bold text-[#c5f82a]">
            London, United Kingdom
          </div>
        </div>
        <div className=" text-white text-center">
          "Front-end developer and avid reader."
        </div>
        <div className=" space-y-4">
          <button className=" flex justify-center items-center bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold text-white w-full p-3 rounded-lg">
            Github
          </button>
          <button className=" flex justify-center items-center bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold text-white w-full p-3 rounded-lg">
            Frontend Mentor
          </button>
          <button className=" flex justify-center items-center bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold text-white w-full p-3 rounded-lg">
            LinkedIn
          </button>
          <button className=" flex justify-center items-center bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold text-white w-full p-3 rounded-lg">
            Twitter
          </button>
          <button className=" flex justify-center items-center bg-[#333333] hover:bg-[#c5f82a] hover:text-black font-bold text-white w-full p-3 rounded-lg">
            Instagram
          </button>

        </div>
      </div>
    </div>
  )}
    