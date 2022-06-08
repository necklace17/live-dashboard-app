# Dashboard Application

## Overview

The Dashboard Application is a web application that displays Charts containing live data. The live data is received via
WebSockets from the server. The Frontend is built with **React**, and the backend is built with **Nest.js**.

## Getting Started

For both applications, Node.js is required. A docker-compose file will be available in future releases.

### Starting the Frontend

- Change directory to the frontend folder with `cd frontend`
- Run `npm install`
- Run `npm start`

### Starting the Backend

- Change directory to the backend folder with `cd backend`
- Run `npm install`
- Run `npm start`

## Features

The Dashboard Application has the following features:

### Backend

The backend is built with **Nest.js** and is responsible for providing the historical and live data.

#### WebSockets

After starting the backend, it will launch differently named WebSockets for chart data. Each socket constantly emits
randomly generated data in a predefined range and on a predefined regular basis. The emitted data contains the timestamp
in Unix format and the randomly generated data.

#### History Endpoint

Furthermore, the backend provides a REST endpoint that provides historical data. The historical data provides 50 data
points consisting of past data points that take the current time as the base value. Random numbers are also supplied for
the data points. With this endpoint, the Frontend can display data already at its initialization.

### Frontend

The Frontend was built with React. The Frontend is responsible for displaying the live data in charts.

#### Highcharts

The Frontend uses the Highcharts library to display the live data. The charts are placed in functional components which
use the useEffect hook to receive the live data. The function first fetches the historical data via the REST endpoint
and then the live data via WebSockets. The array of data is constantly filled with new data emitted from the WebSockets.
The data length is limited to 50 to keep the displayed data manageable; thus, the oldest data point is removed for each
additional data point received.

#### MUI

The Frontend uses the Material-UI library for styling the components.
