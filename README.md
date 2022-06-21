# Interview Scheduler

Interview Scheduler is a React app that lets users book appointments by using a weekly schedule.

- Users select the day that they would like to book an appointment and then they will be shown a schedule of existing appointments for that day.
- Users can creat, edit, and delete appointments.
- When creating a new appointment a user enters their name, and then chooses which interviewer they would like to book an appointment with
- A 'spots remaining' counter shows how many appointment slots are left on each day and is updated whenever an appointment is added or removed from the schedule.

![Interview Scheduler - Creating New Appointment](https://user-images.githubusercontent.com/41748727/174452827-f6f5f083-94b3-4dd7-89a5-8d9d1e8e8ef0.png)

## Setup

- Install dependencies with `npm install`.
- Clone the development server here: https://github.com/lighthouse-labs/scheduler-api
- API server and scheduler app both need to be running at the same time
- Scheduler App runs on http://localhost:8000
- Scheduler API runs on http://localhost:8001
- To clear and reset all appointments visit http://localhost:8001/api/debug/reset

## Running Webpack Development Server

```sh
npm start
```

## Running Scheduler App

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

- "axios": "^0.27.2",
- "classnames": "^2.2.6",
- "fsevents": "^1.2.9",
- "normalize.css": "^8.0.1",
- "react": "^16.9.0",
- "react-dom": "^16.9.0",
- "react-hooks-testing-library": "^0.6.0",
- "react-scripts": "3.0.0",
- "react-test-renderer": "^16.14.0"
