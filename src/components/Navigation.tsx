import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Challenges">Challenges</Link>
      <Link to="/CreateChallenge">CreateChallenge</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
}
