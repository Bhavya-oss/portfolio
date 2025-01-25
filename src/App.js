import { createContext, useRef } from "react";
import Main from "./components/Main";
export const MyContext = createContext();

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <MyContext.Provider
        value={{ homeRef, aboutMeRef, servicesRef, workRef, contactRef }}
      >
        <Main />
      </MyContext.Provider>
    </>
  );
}

export default App;
