import React from "react";

import "components/DayListItem.scss";
import "components/Application.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const btnClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });
  return (
    <li className={btnClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}