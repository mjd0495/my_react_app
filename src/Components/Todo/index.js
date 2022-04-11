import React, { useEffect, useState } from "react";
import "./style.css";
import TodoData from "../TodoList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Data } from "./data";

const TODO = "TODO";
const IN_PROGRESS = "IN_PROGRESS";
const DONE = "DONE";

const Todo = () => {
  const [data, setData] = useState({
    [TODO]: [],
    [IN_PROGRESS]: [],
    [DONE]: [],
  });

  useEffect(() => {
    const toDo = [];
    const inProgress = [];
    const done = [];
    Data.forEach((d) => {
      if (d.status === TODO) {
        toDo.push(d);
      }
      if (d.status === IN_PROGRESS) {
        inProgress.push(d);
      }
      if (d.status === DONE) {
        done.push(d);
      }
    });
    setData({
      [TODO]: toDo,
      [IN_PROGRESS]: inProgress,
      [DONE]: done,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const insert = (arr, index, newItem) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];

  const onDragEnd = (result) => {
    const sourceType = result.source?.droppableId;
    const sourceIndex = result.source?.index;
    const destinationType = result?.destination?.droppableId;
    const destinationIndex = result?.destination?.index;

    let sourceData = [...data?.[sourceType]];
    let destinationData = [...data?.[destinationType]];

    let filterSourceData;
    if (sourceType === destinationType) {
      let filterSourceData = sourceData?.filter(
        (d, index) => index !== sourceIndex
      );
      let newDesitinationData = insert(
        filterSourceData,
        destinationIndex,
        sourceData?.[sourceIndex]
      );

      setData((prevData) => ({
        ...prevData,
        [sourceType]: newDesitinationData,
      }));
    } else {
      let newDesitinationData = insert(
        destinationData,
        destinationIndex,
        sourceData?.[sourceIndex]
      );

      filterSourceData = sourceData?.filter(
        (d, index) => index !== sourceIndex
      );
      setData((prevData) => ({
        ...prevData,
        [sourceType]: filterSourceData,
        [destinationType]: newDesitinationData,
      }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="todo">
        <div className="todo_Switch"></div>
        <div className="todo_MainContainer">
          <div className="d-flex todo-main">
            <div className="todo_ContentContainer">
              <h3 className="todo_SubHeading">A hacer</h3>
              <Droppable droppableId={TODO} type="main">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="droppable"
                  >
                    <span style={{ display: "none" }}>
                      {provided.placeholder}
                    </span>
                    <TodoData todos={data?.TODO} type={TODO} />
                  </div>
                )}
              </Droppable>
            </div>
            <div className="todo_ContentContainer">
              <h3 className="todo_SubHeading">En proceso</h3>
              <Droppable droppableId={IN_PROGRESS} type="main">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="droppable"
                  >
                    <span style={{ display: "none" }}>
                      {provided.placeholder}
                    </span>
                    <TodoData todos={data?.IN_PROGRESS} type={IN_PROGRESS} />
                  </div>
                )}
              </Droppable>
            </div>
            <div className="todo_ContentContainer">
              <h3 className="todo_SubHeading">Objectivos cumplidos</h3>
              <Droppable droppableId={DONE} type="main">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="droppable"
                  >
                    <span style={{ display: "none" }}>
                      {provided.placeholder}
                    </span>

                    <TodoData todos={data?.DONE} type={DONE} />
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default Todo;
