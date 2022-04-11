import React from "react";
import "./style.css";
import { Draggable } from "react-beautiful-dnd";

const TodoList = (props) => {
  const { todos, type } = props;
  return (
    <>
      {(todos || [{}])?.map((todo, i) => (
        <Draggable draggableId={`${type}-${i}`} index={i} key={`${type}-${i}`}>
          {(_provided, snapshot) => (
            <div
              {..._provided.draggableProps}
              {..._provided.dragHandleProps}
              ref={_provided.innerRef}
              // style={{ backgroundColor: "skyblue", border: "1px solid #fff" }}
              className="todo_Box"
            >
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ display: "none" }}>{_provided.placeholder}</span>
                <h3 className="taskTitle">{todo?.taskName}</h3>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
              <p className="taskDescription">{todo?.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div
                  className="taskPhase"
                  style={
                    todo?.phase !== "0" ? { backgroundColor: "#8ac17e" } : {}
                  }
                >
                  Fase {todo?.phase}
                </div>
                <div className="taskDate">
                  {todo?.startAt} - {todo?.endAt}
                </div>
              </div>
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default TodoList;
