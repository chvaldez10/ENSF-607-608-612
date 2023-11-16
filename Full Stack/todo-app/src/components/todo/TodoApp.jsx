import { useState } from "react";

import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      Todo Management Application
      <LoginComponent />
      <WelcomeComponent />
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("in28minutes");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  function handleUsernameChange(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "in28minutes" && password === "dummy") {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  function SucessMessageComponent() {
    if (showSuccessMessage) return <div>Successful Authentication</div>;
  }

  function ErrorMessageComponent() {
    if (showErrorMessage) return <div>Error</div>;
  }

  return (
    <div className="Login">
      <SucessMessageComponent />
      <ErrorMessageComponent />
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="Welcome">Welcom Component</div>;
}