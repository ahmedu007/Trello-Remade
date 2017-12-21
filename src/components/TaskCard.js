import React from "react";

const TaskCard = props => {
  const handleClick = event => {
    props.removeTask(props.task_id);
  };

  return (
    <li
      style={{
        border: "1px dashed gray",
        padding: "0.5rem 1rem",
        marginBottom: ".5rem",
        backgroundColor: "white"
      }}
    >
      {props.task}
      <a style={{ color: "maroon" }} onClick={handleClick}>
        <span className="icon is-small is-right">
          <i className="fa fa-times" />
        </span>
      </a>
    </li>
  );
};

export default TaskCard;
