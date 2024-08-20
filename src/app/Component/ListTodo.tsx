"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { deleTodo, removeTodo } from "@/Redux/TodoSlice";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ListTodo = () => {
  const selector = useSelector((state) => state?.todo?.todoList);
  const disPatch = useDispatch();

  const handleRemoveAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        disPatch(removeTodo());
        toast.success("All todos removed successfully");
      }
    });
  };

  return (
    <div className="mx-4 mt-3">
      <div>
        <AnimatePresence>
          {selector.map((item, index) => (
            <motion.ul
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="text-start my-2 text-xl border border-gray-500 duration-300 hover:border-green-500 p-2 text-green-500 font-medium justify-between flex"
            >
              {item.todo}
              <FaTrash
                onClick={() => {
                  disPatch(deleTodo(item._id));
                  toast.success("Todo deleted successfully");
                }}
                className="hover:text-red-500 duration-300 cursor-pointer"
              />
            </motion.ul>
          ))}
        </AnimatePresence>
      </div>

      <div>
        <AnimatePresence>
          {selector.length ? (
            <div className="text-center items-center justify-center mt-3">
              <button
                onClick={handleRemoveAll}
                className="h-10 w-32 bg-bodyColor border-2 border-gray-500 text-red-400 rounded-md hover:text-red-600 hover:border-gray-400 duration-300"
              >
                All Remove
              </button>
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-xl border border-gray-500 duration-300 hover:border-green-500 p-2 text-red-500 font-bold"
            >
              Your todo list is Empty!
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListTodo;
