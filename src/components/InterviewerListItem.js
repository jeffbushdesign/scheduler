import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewListItem(props) {

  // Logic for conditionally styling the li
  // Button using basic methods
  //   https://flex-web.compass.lighthouselabs.ca/d9d1dd83-511f-4ed8-b16f-c48d996e7063
  // Button using classNames library
  //   https://flex-web.compass.lighthouselabs.ca/9b7a8a46-d264-11ea-87d0-0242ac130003
  // DayListItem using classNames library
  //   https://flex-web.compass.lighthouselabs.ca/d2636068-8eb1-42a8-8cc0-5aae1aef6dc2

  const interviewerConditionalClass = classNames({
    'interviewers__item': true,
    'interviewers__item--selected': props.selected
  });

  return (
    // Adding an onClick event handler
    // https://flex-web.compass.lighthouselabs.ca/e91b2b6f-09d3-4070-b87c-5f57636cdfe2#:~:text=Event%20Handler%20Patterns%20in%20React
    <li className={interviewerConditionalClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {/* Short circuit evaluation
      https://flex-web.compass.lighthouselabs.ca/586d6df7-3410-48f3-8ab3-fd6f1fb627ef#:~:text=Short%20Circuit%20Evaluation
      - It is evaluated left to right, and if the first expression is false, the second expression is not evaluated at all.
      - So if selected is true then the name will be displayed.
      - If selected is not true then the second expression won't be evaluated so the name will not be displayed */}
      {props.selected && props.name}
    </li>
  );

}


