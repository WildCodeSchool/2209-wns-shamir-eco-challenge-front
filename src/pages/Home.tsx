import * as React from "react";
import Navigation from "../components/Navigation";


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
    </div>
  );
}
