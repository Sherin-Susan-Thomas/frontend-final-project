import React from "react";
import "./singlepost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      SINGLE POST
      <div className="singlePostWrapper">
        <img
          src="https://resebloggaren.se/wp-content/uploads/2020/02/rio-de-janeiro-1963744_1920.jpg"
          alt=""
          className="singlePostImg"
        ></img>
        <h1 className="singlePostTitle">
          lorem ipsum lorem ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon">
              <span role="img" aria-label="image">
                ✏️
              </span>
            </i>
            <i className="singlePostIcon">
              <span role="img" aria-label="image">
                ❌
              </span>
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlepostAuthor">
            <b>Author:**NAME**</b>
          </span>
        </div>
        <div className="singlePostDesc">
          <span className="singlepostdesc">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </span>
        </div>
      </div>
    </div>
  );
};
