import React, { useState, useEffect } from "react";


const Index = () => {

  const buttonStyle = {
    backgroundColor: "#306060",
    borderRadius: "1rem"
   }
 const formStyle={
   backgroundColor:"#F6F6F6",
   borderRadius: "2.5rem"

 }
const alertStyle = {
 color:"#306060"
}
 const inputStyle={
   borderRadius: "1rem"
 }

   return(
<div className="flex justify-center items-center h-full p-8 ">
       
<form action="" style={formStyle} className="w-full max-w-lg bg-white shadow-md px-8 pt-6 pb-8 mb-4">

   <div className = "flex justify-center mt-1 mb-8">
   <p style ={alertStyle} className="text-lg italic">Danos toda la información posible!</p>
   </div>
   <div className="flex flex-wrap -mx-3 mb-2">
   <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
   
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1 ml-3" for="grid-first-name">
   Fecha de extravío
   </label>
   <input style={inputStyle} class="appearance-none block w-full bg-white text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date"></input>
   </div>
   
   <div className="w-full md:w-1/2 mb-6 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1 ml-3" for="grid-last-name">
    Lugar de pérdida
   </label>
   <input style={inputStyle} class="appearance-none block w-full bg-white text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"></input>
   </div>

   <div className="w-full  mb-6 px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1 ml-3" for="grid-last-name">
     Particularidades
   </label>
   <input style={inputStyle} class="appearance-none block w-full bg-white text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"></input>
   </div>

   
   </div>

     <div className="flex justify-center lg:justify-end">
   <button style = {buttonStyle} class="w-full hover:bg-blue-700 text-white font-medium py-3 focus:outline-none focus:shadow-outline" type="button">
       Reportar Pérdida
  </button>
  </div>
 </form>
</div>)
}
export default Index