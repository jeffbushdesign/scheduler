import React from "react";

import "components/DayListItem.scss";
import "components/Application.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  let message;
  if (props.spots === 0) {
    message = (
      <h3 className="text--light">no spots remaining</h3>
    );
  } else if (props.spots === 1) {
    message = (
      <h3 className="text--light">1 spot remaining</h3>
    );
  } else {
    message = (
      <h3 className="text--light">{props.spots} spots remaining</h3>
    );
  }

  const btnClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });
  return (
    <li className={btnClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      {message}
    </li>
  );
}