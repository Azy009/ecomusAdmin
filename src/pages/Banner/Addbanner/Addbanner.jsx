import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Addbannerform from "./Addbannerform";

const Addbanner = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="dashboardcontent px-2">
        <div className="container-fuild px-2 desgin1">
          <div className="row bg-white ">
            <div
              className="col-lg-12 d-flex justify-content-between py-2"
              style={{
                background: "#bcdae9",
                color: "#0C5398",
              }}
            >
              <p className="m-0 customfont">Add Banner</p>
              <div className="addnew d-block mb-2">
                <button className="btn text-white closebtn">
                  <NavLink
                    to="/bannerlist/0"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    x Close
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Addbannerform />
      </div>
    </div>
  );
};

export default Addbanner;
