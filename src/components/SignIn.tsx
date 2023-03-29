import { useState } from "react";
import "./SignIn.css"

export default function SignIn() {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(username, password);
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="username">Identifiant:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleUsername}
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePassword}
        />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
