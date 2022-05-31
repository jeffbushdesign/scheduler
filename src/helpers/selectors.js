export function getAppointmentsForDay(state, dayName) {

  const appointments = [];

  if (state.days.length === 0) {
    return [];
  }

  const filteredDay = state.days.find(day => day.name === dayName);
  // filteredDay will return one object




  console.log('filteredDay:', filteredDay);
  console.log('filteredDay.appointments', filteredDay.appointments);

  const appointmentIDs = filteredDay.appointments;
  // console.log('appointmentIDs: ', appointmentIDs);

  // map
  for (const id of appointmentIDs) {
    appointments.push(state.appointments[id]);
  }

  return appointments;



  // const appointments = appointmentIDs.map((id) => {

  //   const apt = state.appointments[id];
  //   return apt;

  // });
  // // console.log('appointments:', appointments);
  // return appointments;

}

// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter(user => user.name === name);
//   return filteredNames;
// }