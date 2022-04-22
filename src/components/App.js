import React, { useState } from "react";
import Header from "./Header";
import TapControl from "./TapControl";
import FeedbackData from "../data/FeedbackData";

function App() {
  const [feedback] = useState(FeedbackData);
  return (
    <React.Fragment>
      <Header />
      <TapControl feedback={feedback} />
    </React.Fragment>
  );
}

export default App;
