import React, { useState } from "react";

// to pass the first test our useVisualMode Hook will need to: take in an initial mode (initial)
export default function useVisualMode(initial) {
  // set the mode state with the initial mode provided
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace) {

    setMode(newMode);

    const newHistory = [...history];
    if (replace) {
      newHistory.pop();
    }

    newHistory.push(newMode);
    setHistory(newHistory);
  };

  const back = function () {
    if (history.length < 2) {
      return;
    }

    const newHistory = [...history];

    newHistory.pop();
    setHistory(newHistory);
    const newMode = newHistory[newHistory.length - 1];
    setMode(newMode);

  };














  // return an object with a mode property
  return { mode, transition, back };
}

// Create a transition function within useVisualMode that will take in a new mode and update the mode state with the new value. If we used useState to initialize the mode state in useVisualMode, what will we have to do to update the mode value?
// function useCustomHook() {
//   function action() {}

//   return { action };
// }