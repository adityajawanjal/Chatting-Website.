import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAccountState } from "./context/AccountProvider";
import ChatDialouge from "./pages/ChatDialogue";
import LoginDialogue from "./pages/LoginDialogue";


const App = () => {
  const { account } = useAccountState();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={account ? <ChatDialouge/> : <LoginDialogue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
