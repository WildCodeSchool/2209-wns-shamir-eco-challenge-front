import * as React from "react";
import Navigation from "../components/Navigation";
import SignIn from "../components/SignIn";
import Register from "../components/Register";

export default function RegisterSignIn() {
    return (

        <div>
            <Navigation/>
            Page inscription/connexion
            <h3>Déjà membre ?</h3>
            <SignIn />
            <h3>Inscription</h3>
            <Register />
            <span className="spaceDivider"></span>
        </div>
    );

}
