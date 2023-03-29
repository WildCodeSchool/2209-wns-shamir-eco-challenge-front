import * as React from "react";
// import { gql, useQuery } from "@apollo/client";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SignIn from "../components/SignIn";

// const GET_ALL_USERS = gql`
//   query getAllUsers {
//   getAllUsers {
//     id
//     email
//   }
// }
// `;

export default function Home() {

  // const {loading, error, data} = useQuery(GET_ALL_USERS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  // console.log(data);

  return (
    <div>
      <Navigation />

     
      <p>Home Page</p>

      <h1>Bienvenue sur "Eco-G" !</h1>
      <p>
        Envie de lancer un challenge à vos amis ? "Eco-Challenges" vous permet de
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
