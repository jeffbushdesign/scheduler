import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewListItem(props) {

  // Logic for conditionally styling the li
  const interviewerConditionalClass = classNames({
    'interviewers__item': true,
    'interviewers__item--selected': props.selected
  });

  return (
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


