import React from "react";
import "./Stories.css";
export default function stories() {
  return (
    <div>
      <section>
        <div className="leftside">
          <div className="story">
            <div className="stories">
              <a href="">
                <img src="companylogo.jpg" alt="" className="sizin" />
              </a>
              <p className="sname">Ashter global solution</p>
            </div>
            <div className="stories">
              <a href="">
                <img src="companylogo.jpg" alt="" className="sizin" />
              </a>
              <p className="sname">Ashterglobalsolution</p>
            </div>
            <div className="stories">
              <a href="">
                <img src="companylogo.jpg" alt="" className="sizin" />
              </a>
              <p className="sname">Ashter global solution</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
