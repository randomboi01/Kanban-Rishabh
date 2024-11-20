import React from "react";
import { useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { DiCodeigniter } from "react-icons/di";
import { Icon } from "../Icons/IconUtils";
import "./DashBoard.css";
import Card from "../Card/Card";

const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  console.log("stat", isStatus, "prio", isPriority);
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);
  console.log("rere", user);

  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((element, index) => (
          <div key={index} className="dashCardContainer">
            <div className="dashCardHeading">
              <div className="leftView">
                {user ? (
                  <div className="imageContainer"></div>
                ) : isStatus ? (
                  <div className="cardTitle">
                    {element[index].title === "Backlog" ? (
                      <Icon name="backlog" />
                    ) : element[index].title === "Todo" ? (
                      <Icon name="toDo" />
                    ) : element[index].title === "In progress" ? (
                      <Icon name="inProgress" />
                    ) : element[index].title === "Done" ? (
                      <Icon name="done" />
                    ) : (
                      <IoMdCloseCircleOutline />
                    )}
                  </div>
                ) : isPriority ? (
                  <div className="tags">
                    {element[index].title === "Low" ? (
                      <Icon name="lowPriority" />
                    ) : element[index].title === "Medium" ? (
                      <Icon name="mediumPriority" />
                    ) : element[index].title === "High" ? (
                      <Icon name="highPriority" />
                    ) : element[index].title === "Urgent" ? (
                      <Icon name="urgentPriorityGrey" />
                    ) : (
                      <p></p>
                    )}
                  </div>
                ) : (
                  <DiCodeigniter />
                )}
                <span>
                  {element[index]?.title} {element[index].value?.length}
                </span>
              </div>
              <div className="rightView">
                <Icon name="add" />
                <span>...</span>
              </div>
            </div>
            <div className="dashList">
              {element[index]?.value?.map((element, ind) => (
                <Card
                  key={ind}
                  id={element.id}
                  title={element.title}
                  tag={element.tag}
                  status={element.status}
                  priority={element.priority}
                />
              ))}
            </div>
          </div>
        ))}
        {isStatus && (
          <>
            {["Done", "Cancelled"].map((status, i) => (
              <div key={i} className="dashCardContainer">
                <div className="dashCardHeading">
                  <div className="leftView">
                    <div className="cardTitle">
                      <Icon
                        name={status === "Done" ? "done" : "cancelled"}
                        style={{ color: status === "Done" ? "blue" : "grey" }}
                      />
                    </div>
                    <span>{status}</span>
                    <span>0</span>
                  </div>
                  <div className="rightView">
                    <Icon name="add" />
                    <span>...</span>
                  </div>
                </div>
                <div className="dashList"></div>
              </div>
            ))}
          </>
        )}
      </div>
    )
  );
};

export default DashBoard;
