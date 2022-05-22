import React from "react";

import "./InterviewerList.scss";
import InterviewListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  // const { interviewers, setInterviewer, interviewer } = props;
  const interviewers = props.interviewers;
  const setInterviewer = props.setInterviewer;
  const interviewer = props.interviewer;

  const list = interviewers.map(i =>
    <InterviewListItem
      avatar={i.avatar}
      name={i.name}
      id={i.id}
      setInterviewer={setInterviewer}
      selected={interviewer === i.id}
    />
  );

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {list}
      </ul>
    </section>
  );
}