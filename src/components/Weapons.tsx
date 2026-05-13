export const Weapons = () => {
  return (
    <div className="weap-cont">
      <h5>WEAPONS</h5>
      <ul className="skill-list">
        <li className="skill-item">
          <p>Pistol</p> <h4>10 dmg</h4>
        </li>
        <li className="skill-item">
          <p>Sword</p>
          <h4>5 dmg</h4>
        </li>
      </ul>
      <button className="button"> + Add Weapon </button>
    </div>
  );
};
