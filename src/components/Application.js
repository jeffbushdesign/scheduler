import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";


// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer: {
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };

export default function Application(props) {
  // combine the state for day, days, and appointments into a state into a single object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  // we can create a function called setDay that updates the state with the new day
  const setDay = day => setState({ ...state, day });




  // default selected day will be Monday
  // const [day, setDay] = useState("Monday");

  // show the other days of the week
  // const [days, setDays] = useState([]);

  // Implement the setDays function in the Application component to update the days state. This function should follow a similar pattern to our existing setDay function.
  // const setDays = days => {
  //   //... your code here ...
  //   setState(prev => ({ ...prev, days }));
  // };




  useEffect(() => {
    //axios request here...
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
    ]).then((all) => {
      // console.log('days: all[0]', all[0], 'appointments: all[1]', all[1]);
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data }));



    });

    // axios
    //   .get("api/days")
    //   .then(response => {
    //     // setDays(response.data)

    //   });
  }, []);



  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map(appointment => <Appointment key={appointment.id} {...appointment} />)}
        {/* Last appointment */}
        <Appointment key="last" time="5pm" />
      </section>
    </main>

  );
}


