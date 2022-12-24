import * as React from "react";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SignIn from "../components/SignIn";

export default function Home() {
  return (
    <div>
      <Navigation />
      <p>Home Page !</p>
      <h1>Bienvenue sur "Eco-Challenges" !</h1>
      <p>
        Envie de lancer un challenge à vos amis ? "Nom de l'App" vous permet de
        créer des challenges personnalisés constitués d'éco-gestes à réaliser
        pour vous informer et sensibiliser sur votre impact énergétique au
        quotidien !
      </p>
      <h3>Déjà membre ?</h3>
      <SignIn />
      <h3>Inscription</h3>
      <Register />
      <span className="spaceDivider"></span>
    </div>
  );
}
