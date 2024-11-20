import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import { Icon } from "../Icons/IconUtils";

const Card = ({ id, title, tag, status, priority, avatar }) => {

  console.log(priority);

  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";

  const statusOrder = ["Backlog", "Todo", "In progress", "Done"];
  const statusIcons = {
    "Backlog": <Icon name="backlog" />,
    "Todo": <Icon name="toDo" />,
    "In progress": <Icon name="inProgress" />,
    "Done": <Icon name="done" />,
  };

  const priorityOrder = ["High", "Medium", "Low", "NotSpecified", "Urgent"];
  const priorityIcons = {
    "High": <Icon name="highPriority" />,
    "Medium": <Icon name="mediumPriority" />,
    "Low": <Icon name="lowPriority" />,
    "NotSpecified": <Icon name="noPriority" />,
    "Urgent": <Icon name="urgentPriorityGrey" />,
  };

  
  const priorityLabel = priorityOrder[priority - 2] || "NotSpecified";

  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "95%", height: "95%", borderRadius: "50%" }}
            src={avatar || "https://via.placeholder.com/30"}
            alt="User Avatar"
          />
        </div>
      </div>
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <div className="cardDetails">
          <span className="cardPriority">
            {priorityIcons[priorityLabel] || priorityIcons["NotSpecified"]}
          </span>
          <span className="cardFeature">
            <span className="cardStatus">
              {statusIcons[status] || null}
            </span>
            <p className="cardTag">{tag}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  status: PropTypes.oneOf(["Backlog", "Todo", "In progress", "Done"]),
  priority: PropTypes.number.isRequired, 
  avatar: PropTypes.string,
};

Card.defaultProps = {
  tag: "Feature Request",
  status: "Backlog",
  priority: 1,  
  avatar: "https://via.placeholder.com/30",
};

export default Card;
