import { useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <item key="home" onClick={() => navigate("/")}>
            Home
          </item>
        </li>
        <li>
          <item key="form" onClick={() => navigate("./Form")}>
            Add New Medication
          </item>
        </li>
      </ul>
    </>
  );
} //this is breaking my site, reconfigure

/* </div>
      <button className="submit-new">
        <a href="/Form">
          <h4>Add New Medication</h4>
        </a>
      </button> */
