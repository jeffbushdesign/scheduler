export function getAppointmentsForDay(state, dayName) {

  const appointments = [];

  if (state.days.length === 0) {
    return [];
  }

  const filteredDay = state.days.find(day => day.name === dayName);
  // filteredDay will return one object
  if (!filteredDay) return [];



  const appointmentIDs = filteredDay.appointments;


  // map
  for (const id of appointmentIDs) {
    appointments.push(state.appointments[id]);
  }

  return appointments;
}



export function getInterview(state, interview) {
  if (!interview) return null;
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };

}

export function getInterviewersForDay(state, day) {
  const interviewers = [];

  const filteredDays = state.days.filter(days => days.name === day);

  if (filteredDays.length === 0) {
    return interviewers;
  } else {
    for (const interviewer of filteredDays[0].interviewers) {
      if (state.interviewers[`${interviewer}`]) {
        interviewers.push(state.interviewers[`${interviewer}`]);

      }
    }
  }
  return interviewers;
}