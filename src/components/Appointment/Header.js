import React from 'react';

// No need to import the style.scss
// Since we already reference the styles in the stories/index.js file, we don't need to import it again. We can use the provided JSX to render the correct visual state.

export default function Header() {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__separator" />
    </header>
  );
}
