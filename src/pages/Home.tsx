import * as React from "react";
// import { gql, useQuery } from "@apollo/client";
import Navigation from "../components/Navigation";
import Register from "../components/Register";
import SignIn from "../components/SignIn";
import { gql, useQuery } from "@apollo/client";
import "./Home.css"


const GET_ALL_USERS = gql`
  query getAllUsers {
  getAllUsers {
    id
    email
  }
}
`;

export default function Home() {

  const {loading, error, data} = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data);

 return (
   <div>
     <Navigation />
     <div className="container">
       <img src="../assets/logo.png" alt="Logo" />
       <ul>
         {data.getAllUsers.map((user: any) => (
           <li key={user.id}>{user.email}</li>
         ))}
       </ul>
       <h1 className="title">Bienvenue sur "Eco-Chal" !</h1>

       <p className="description">
         Envie de lancer un challenge à vos amis ? Eco-Challenges vous permet de
         créer des challenges personnalisés constitués d'éco-gestes à réaliser
         pour vous informer et sensibiliser sur votre impact énergétique au
         quotidien !
       </p>

       <h3 className="subtitle">Déjà membre ?</h3>
       <SignIn />

       <h3 className="subtitle">Inscription</h3>
       <Register />

       <div className="divider"></div>
     </div>
   </div>
 );
}
