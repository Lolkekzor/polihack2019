import React from "react";
import Stories from "./layouts/Stories";

class News extends React.Component {
  //a global index to keep track of the all showed items

  //return statement
  render() {
    return (
      <div
        className={"container-fluid main w-75"}
      >
        <table className="table">
          <tbody>
            <Stories state={this.props.data} />
          </tbody>
        </table>
      </div>
    );
  }
  
};

export default News;
