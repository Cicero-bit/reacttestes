import PropTypes from "prop-types";
import React from "react";
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Tasks.css"

export default function Tasks({handleDelete, handleEdit, tasks}){
  return(
    <ul className="tasks">
    {tasks.map((tasks, index) => (
      <li
      key={tasks}>
        {tasks}
        <span>
        <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"></FaEdit>
        <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete"></FaWindowClose>
        </span>
        </li>
    ))}
  </ul>
  )
}

Tasks.propType = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
}
