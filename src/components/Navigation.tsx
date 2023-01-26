import { Link } from "react-router-dom";
import "../style.css";

export default function Navigation() {
  return (
    <div
     className="styleNav">
        <Link to="/Guest">Visitors</Link> {' '}
      <Link to="/">Home</Link>{' '}
      <Link to="/RegisterSignIn">Inscription/Connexion</Link>{' '}
      <Link to="/HomeMember">Home Member</Link>{' '}
      <Link to="/Challenges">Challenges</Link>{' '}
      <Link to="/CreateChallenge">CreateChallenge</Link>{' '}
      <Link to="/ChallengesDetails">DetailsChallenge</Link>{' '}
      <Link to="/Profile">Profile</Link>{' '}
      <Link to="/Friends">Friends</Link>{' '}
      <Link to="/Contact">Contact</Link>
    </div>
  );
}
