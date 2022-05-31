import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { DashboardNavBar } from "./components/DashboardNavBar";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardChart } from "./components/DashboardChart";

// const ENDPOINT = "http://localhost:8000";
// const socket = socketIOClient(ENDPOINT);

function App() {
  // const [data, setData] = useState<number[]>([]);
  //
  // useEffect(() => {
  //   socket.on("FromAPI", (recData) => {
  //     setData((data) => [...data, typeof recData !== "undefined" && recData]);
  //   });
  // }, []);

  return (
    <div>
      <DashboardNavBar></DashboardNavBar>
      <Container fluid="md">
        <Row>
          <Col>
            <DashboardChart
              name="Umbrella Corporation Stocks"
              socket="umbrella_stocks"
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="Gotham City Opera Stocks"
              socket="gotham_city_opera_stocks"
            ></DashboardChart>
          </Col>
        </Row>
        <Row>
          <Col>
            <DashboardChart
              name="InGen Stocks"
              socket="ingen_stocks"
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="Cyberdyne Systems Stocks"
              socket="cyberdyne_systems"
            ></DashboardChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
