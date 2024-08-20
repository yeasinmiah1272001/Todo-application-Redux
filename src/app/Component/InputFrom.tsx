"use client"
import { addTodo } from "@/Redux/TodoSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import ListTodo from "./ListTodo";
import Link from "next/link";
import Footer from "./Footer";

const InputFrom = () => {
    const [todo, setTodo] = useState('');

    const disPatch = useDispatch()


    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(e)

        if(todo === ""){
            toast.error("please enter your todo")

        } else {
            disPatch(addTodo({_id: Math.random().toString(), todo: todo}))
            toast.success("Todo added successfully!")
            setTodo("")
        }
    }
  
    return (
        <div className="mx-3 p-5 ">
            <h1 className="ml-6 text-2xl font-bold">Add Todo</h1>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex space-x-2 px-4 p-5 bg-bodyColor relative items-center">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Enter your todo here"
                        className="p-2 flex-1 border border-gray-500 duration-300 hover:border-green-500 outline-none rounded px-4 pr-10 bg-bodyColor w-full"
                    />
                   {
                    todo &&  <span onClick={() => setTodo("")} className="absolute right-4 top-3 text-gray-500 hover:text-red-500 cursor-pointer">
                    <IoMdClose />
                </span>
                   }
                </div>
                <button
                    type="submit"
                    className="p-2 hover:text-red-400 bg-bodyColor border-2 border-gray-700 hover:border-gray-500 duration-300 text-white rounded"
                >
                    ADD TODO
                </button>
            </form>

           <ListTodo/>
           <Footer/>

           <div className="text-center mt-6 underline">
            <Link href={"/ItemList"} className="text-center text-xl text-green-400 font-medium">Goto To Another Page Todo</Link>
           </div>
            
        </div>
    );
};

export default InputFrom;
