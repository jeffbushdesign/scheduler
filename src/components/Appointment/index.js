import React from 'react';
import useVisualMode from "hooks/useVisualMode";
import Form from './Form';
import Status from './Status';


import "./styles.scss";

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Confirm from './Confirm';
import Error from './Error';


export default function Appointment(props) {
  // (for reusability)
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );





  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(error => transition(ERROR_SAVE, true));

  }

  function cancel() {
    transition("DELETE", true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition("EMPTY");
      })
      .catch(error => transition(ERROR_DELETE, true));
  }

  function confirm() {
    transition("CONFIRM");
  }




  return (
    <article className='appointment' data-testid="appointment">
      <Header time={props.time} />

      {mode === EMPTY && (<Empty onAdd={() => transition(CREATE)} />)}
      {mode === SAVING && <Status message="Saving..." />}
      {/* {mode === ERROR_SAVE && <Status message="Could not save appointment" />} */}
      {mode === ERROR_SAVE && <Error message="Could not save appointment" onClose={back} />}
      {/* {mode === ERROR_DELETE && <Status message="Could not cancel appointment" />} */}
      {mode === ERROR_DELETE && <Error message="Could not cancel appointment" onClose={back} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => confirm()}
        />
      )}


      {mode === DELETE && <Status message="Deleting..." />}
      {mode === CONFIRM && <Confirm message="Delete this interview?" onCancel={() => back} onConfirm={() => cancel()} />}
      {mode === CREATE && <Form interviewers={props.interviewers} onCancel={() => back} onSave={save} />}
      {mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={() => back}
          onSave={save}
        />
      }
    </article>
  );
}



