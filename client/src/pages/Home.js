import React, { useEffect, useState } from "react";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";

function Home() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const OnDelete = (id__) => {
    if (window.confirm("are you sure to delete this user")) {
      axios.delete(`/api/users/${id__}`).then((res) => {
        setMessage(res.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
        setUsers(users.filter((item) => item._id !== id__));
      });
    }
  };
  useEffect(async () => {
    await axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="row p-4">
      <center>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand">Contact Manager</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/add">
                  Add user <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Alert message={message} show={show} />

        <div className="col-12 col-lg-7">
          <div className="mt-4">
            <h2>List Contact</h2>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Lastname</th>
                <th scope="col">Firstname</th>
                <th scope="col">type</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ Email, Lastname, Firstname, type, Age, _id }) => (
                <RowDetails
                  Email={Email}
                  Lastname={Lastname}
                  Firstname={Firstname}
                  type={type}
                  Age={Age}
                  Id={_id}
                  OnDelete={OnDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Home;
