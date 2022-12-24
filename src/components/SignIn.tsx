import { useState } from "react";

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
        <label>Identifiant</label>
        <input type="text" name="username" onChange={handleUsername}></input>

        <label>Mot de passe</label>
        <input type="text" name="password" onChange={handlePassword}></input>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
