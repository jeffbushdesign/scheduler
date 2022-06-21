import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewListItem(props) {


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

      {props.selected && props.name}
    </li>
  );

}


