export const Inventory = () => {
  return (
    <div className="weap-cont">
      <h5>INVENTORY</h5>
      <ul className="skill-list">
        <li className="skill-item">
          <p>Small mirror</p> <h4>1</h4>
        </li>
        <li className="skill-item">
          <p>Amulet</p>
          <h4>1</h4>
        </li>
        <li className="skill-item">
          <p>Some shit</p>
          <h4>1</h4>
        </li>
      </ul>
      <button className="button"> + Add Item </button>
    </div>
  );
};
