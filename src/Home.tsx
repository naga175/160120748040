import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Train } from "./types";
import Trains from "./Trains";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainPage from "./TrainPage";

const Home = () => {
  const [trains, setTrains] = useState<Train[]>([]);

  useEffect(() => {
    var token: string = "";

    const reqBody = {
      companyName: "CBIT",
      clientID: "9aef95f9-bbd3-4f33-a7ee-30f385b8d70f",
      ownerName: "Naga Bajjuri",
      rollNo: "160120748040",
      ownerEmail: "ugs20a131_csm.nagaraju@cbit.org.in",
      clientSecret: "PUXAHWBbQHZmmAQW",
    };

    axios.post("http://20.244.56.144/train/auth", reqBody).then((response) => {
      token = response.data.access_token;
      console.log(token);

      const headers = { Authorization: `Bearer ${token}` };
      axios
        .get("http://20.244.56.144:80/train/trains", { headers })
        .then((response) => {
          console.log(response);
          setTrains(sort(response.data));
        });
    });
  }, []);

  const sort = (trains: Train[]) => {
    return trains.sort(function (a, b) {
      return (
        a.price.sleeper - b.price.sleeper ||
        a.price.AC - b.price.AC ||
        b.seatsAvailable.AC +
          b.seatsAvailable.sleeper -
          (a.seatsAvailable.AC + a.seatsAvailable.sleeper) ||
        b.departureTime.hours +
          b.delayedBy / 60 -
          (a.departureTime.hours + a.delayedBy / 60) ||
        b.departureTime.minutes +
          (b.delayedBy % 60) -
          (a.departureTime.minutes + (a.delayedBy % 60)) ||
        b.departureTime.seconds - a.departureTime.seconds
      );
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="train/:trainNumber"  element={<TrainPage trains={trains} />} />
          <Route   path="/"  element={<Trains trains={trains} />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
