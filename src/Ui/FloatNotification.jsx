
const FloatNotification = ({mode}) => {
  return (
    <div className=" w-[30%]  flex justify-end  hidden md:block  " >
    <div className={`rounded-3xl text-center px-10 py-4 w-1/3   shadow-lg absolute bottom-48  transition-all duration-700 main-notes ${mode ? "bg-[#191919] border-2 border-gray-500":'bg-white'}`}>
      <p className="font-semibold text-2xl text-bluecolor">
      ⭐⭐⭐⭐⭐
      <p className="py-3"> 🎁 Flash Sale! 🎁</p> 
      </p>
      <p className={` ${mode && "text-white"} my-2 font-semibold capitalize text-black `}> 🎉 25% discount on first your  order 🎉 
     <br></br> 🎯 Elevate Your Web Experience with Us!  🎯</p>
      <p className="font-semibold">Contact Here </p>
      <p className="text-2xl text-bluecolor font-semibold">  0304-9513443 </p>
    </div>
  </div>
  )
}

export default FloatNotification