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
              name="First Chart"
              socket="FromAPI"
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="First Chart"
              socket="FromAPI"
            ></DashboardChart>
          </Col>
        </Row>
        <Row>
          <Col>
            <DashboardChart
              name="First Chart"
              socket="FromAPI"
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="First Chart"
              socket="FromAPI"
            ></DashboardChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
