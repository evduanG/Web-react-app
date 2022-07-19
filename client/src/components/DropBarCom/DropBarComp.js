import "./DropBarComp.css";

const DropBarComp = ({ arrayOfValues, title, handle }) => {
  return (
    <li className="dropdown" key={"alcoholdropdown"}>
      {" "}
      <Link to="/alcohol">Alcohol</Link>
      <div className="dropdown-content">
        {arrayOfValues.map((item) => {
          return (
            <li key={`LI_${item.id}`}>
              {" "}
              <button className="dropdown-content-button" key={`LI_${item.id}`}>
                {"item.title"}
              </button>
            </li>
          );
        })}
      </div>
    </li>
  );
};
export default DropBarComp;
