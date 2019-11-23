import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Stories from "./layouts/Stories";
import Loader from "./layouts/Loader";

class News extends React.Component {
  //a global index to keep track of the all showed items

  //return statement
  render() {
    return (
      <div
        className={"container-fluid main"}
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
