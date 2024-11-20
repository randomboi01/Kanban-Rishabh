// src/utils/iconUtils.js
import threeDotMenu from "./icons_FEtask/3 dot menu.svg";
import add from "./icons_FEtask/add.svg";
import backlog from "./icons_FEtask/Backlog.svg";
import cancelled from "./icons_FEtask/Cancelled.svg";
import display from "./icons_FEtask/Display.svg";
import done from "./icons_FEtask/Done.svg";
import down from "./icons_FEtask/down.svg";
import highPriority from "./icons_FEtask/Img - High Priority.svg";
import lowPriority from "./icons_FEtask/Img - Low Priority.svg";
import mediumPriority from "./icons_FEtask/Img - Medium Priority.svg";
import inProgress from "./icons_FEtask/in-progress.svg";
import noPriority from "./icons_FEtask/No-priority.svg";
import urgentPriorityColor from "./icons_FEtask/SVG - Urgent Priority colour.svg";
import urgentPriorityGrey from "./icons_FEtask/SVG - Urgent Priority grey.svg";
import toDo from "./icons_FEtask/To-do.svg";

// Icon mapping object
export const ICONS = {
  threeDotMenu,
  add,
  backlog,
  cancelled,
  display,
  done,
  down,
  highPriority,
  lowPriority,
  mediumPriority,
  inProgress,
  noPriority,
  urgentPriorityColor,
  urgentPriorityGrey,
  toDo,
};

// Icon component that renders the appropriate SVG
export const Icon = ({ name, className = "", ...props }) => {
    const IconComponent = ICONS[name];  // Get the corresponding icon from the ICONS object
  
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found`);
      return null;  // If no matching icon is found, return null
    }
  
    return (
      <img src={IconComponent} className={className} alt={name} {...props} />
    );
  };