import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  // combine the state for day, days, and appointments into a state into a single object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // we can create a function called setDay that updates the state with the new day
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    //axios request here...
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      // console.log('days: all[0]', all[0], 'appointments: all[1]', all[1]);
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      console.log('interviewers:', all[2].data);
    });
  }, []);

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments
        });
      });
  }
  console.log('state', state);

  function cancelInterview(id) {
    // make a delete call to the back end
    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        const appointment = {
          ...state.appointments[id],
          interview: null
        };

        const appointments = {
          ...state.appointments,
          [id]: appointment
        };

        setState({
          ...state,
          appointments
        });
      });
  };

  return (
    {
      state: state,
      setDay: setDay,
      bookInterview: bookInterview,
      cancelInterview: cancelInterview
    }
  );
}

