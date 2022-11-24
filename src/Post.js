import React from "react";
import "./Post.css";

export default function post() {
  return (
    <div>
      <section>
        <div className="leftside">
          <div className="posts">
            <div className="posttitle">
              <div className="post-left">
                    <div className="image">
                        <img src="companylogo.jpg" alt="profile icon" width="32" height="32"className="pimg"/>
                            <div className="details">
                                <p>Ashter global solution</p>
                                {/* <p className="pname">Ashter</p> */}
                            </div>
                    </div>
              </div>
              <div className="post-right">
                <i class="fas fa-ellipsis"></i>
              </div>
            </div>
            <div className="post-content">
              <img src="companylogo.jpg" alt="" height="600px" width="600px" />
            </div>
            <div className="post-footer">
              <div className="likeShareComment">
                <i class="far fa-heart si"></i>
                <i class="far fa-comment si"></i>
                <i class="far fa-paper-plane"></i>
              </div>
              <div className="savepost">
                <i class="far fa-bookmark"></i>
              </div>
            </div>
            <div className="postFooterContent">
                <p className="likes">100 likes .</p><br/>
                <p className="postingtime">1Dayago</p>
              </div>
              <div className="add-comment">
                <div className="leftSide">
                  <i class="far fa-smile-beam"></i>
                  <input type="text" placeholder="Add a Comment..." />
                </div>
                <div className="rightSide">
                  <p>post</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
