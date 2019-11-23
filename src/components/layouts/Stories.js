import React from "react";
import timeago from "epoch-timeago";
import { Link } from "react-router-dom";

const Stories = ({ state }) => {
  return (
    <>
      {state.map(
        ({ item, author, title, score, comments_count, time, url, id }) => (
          //<Link class="question-div" to={{pathname: "question/"+id, title: title}}>
            <tr key={item}>
              <td style={{ padding: "0px" }}>
                <i
                  className="fas fa-sort-up"
                  style={{
                    fontSize: "30px",
                    marginTop: "16px",
                    padding: "0px",
                    marginRight: "0px"
                  }}
                />
              </td>
              <td
                style={{
                  padding: "0px",
                  paddingTop: "13px",
                  paddingRight: "15px",
                  color: "#828282"
                }}
              >
                &nbsp;
                {score}
              </td>
              <td style={{ paddingRight: "80px", fontWeight: "600" }}>
                <Link class="question-div" to={{pathname: "question/"+id, title: title}}>
                  {title}
                </Link>
              </td>
              <React.Fragment className="info">
                <td style={{ color: "#828282" }}>
                  <i className="fas fa-user" />{" "}
                    {author}
                </td>
                <td style={{ color: "#828282" }}>
                  <i className="fas fa-clock"> {timeago(time * 1000)}</i>
                </td>
                <td style={{ color: "#828282" }}>
                  <i className="far fa-comment-alt" />{" "}
                    {comments_count}
                </td>
              </React.Fragment>
            </tr>
          //</Link>
        )
      )}
    </>
  );
};
export default Stories;
