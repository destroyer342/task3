import React, { Component } from "react";
import axios from "axios";

export default class Addapi extends Component {
  state = {
    users: [],
  };
  componentDidMount = () => {

    axios
      .get("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data.Search,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const usersData = this.state.users.filter((item, index) => index < 5).map((info) => {
      return (
        <React.Fragment key={info.imdbID}>
          <div className="card" style={{ width: "18rem" }}>
            <p>{info.Title}</p>
          </div>
        </React.Fragment>
      );
    });
    return <>{usersData}</>;
  }
}
