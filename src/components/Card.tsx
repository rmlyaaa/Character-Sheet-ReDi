import { Link } from "react-router";

export const Card = () => {
  return (
    <Link to="/character" className="link-reset">
      <div className="card">
        <img src="/src/assets/placeholder.png" alt="" />
        <p>Name</p>
      </div>
    </Link>
  );
};
