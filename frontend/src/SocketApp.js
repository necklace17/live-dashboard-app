import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { DashboardNavBar } from "./components/DashboardNavBar";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardChart } from "./components/DashboardChart";

const ENDPOINT = "http://localhost:8000";
const socket = socketIOClient(ENDPOINT);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("FromAPI", (recData) => {
      setData((data) => [...data, typeof recData !== "undefined" && recData]);
    });
  }, []);

  return (
    <div>
      <DashboardNavBar></DashboardNavBar>
      <Container fluid="md">
        <Row>
          <Col>
            <DashboardChart
              name="First Chart"
              data={[1, 2, 3]}
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="Second Chart"
              data={[1, 2, 3]}
            ></DashboardChart>
          </Col>
        </Row>
        <Row>
          <Col>
            <DashboardChart
              name="Third Chart"
              data={[1, 2, 3]}
            ></DashboardChart>
          </Col>
          <Col>
            <DashboardChart
              name="Forth Chart"
              data={[1, 2, 3]}
            ></DashboardChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
