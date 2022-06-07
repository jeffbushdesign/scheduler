import React from 'react';
import useVisualMode from "hooks/useVisualMode";
import Form from './Form';


import "./styles.scss";

import Header from './Header';
import Show from './Show';
import Empty from './Empty';


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const interviewers = [];

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview);
    transition(SHOW);
  }


  console.log('props.interviewers', props.interviewers);
  return (
    <article className='appointment'>
      <Header time={props.time} />

      {mode === EMPTY && (<Empty onAdd={() => transition(CREATE)} />)}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => console.log("onEdit")}
          onDelete={() => console.log("onDelete")}
        />
      )}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back(EMPTY)} onSave={save} />}

    </article>
  );
}


