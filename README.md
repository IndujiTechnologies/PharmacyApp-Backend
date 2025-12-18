# PharmacyApp Backend

This repository contains the backend for the PharmacyApp, built using Node.js and Express.

## Project Structure

```
.
├── src
│   ├── app.js          # Main Express server setup
│   ├── routes          # Directory for API route definitions
│   │   └── index.js     # Example route
│   └── controllers     # Directory for controller logic
│       └── sampleController.js # Example controller logic
├── package.json        # Project metadata and dependencies
├── .gitignore          # Ignored files (e.g., node_modules)
└── README.md           # Documentation
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/IndujiTechnologies/PharmacyApp-Backend.git
```

2. Navigate to the project directory and install dependencies:
```bash
cd PharmacyApp-Backend
npm install
```

3. Start the server in development mode:
```bash
npm run dev
```

4. Access the application at `http://localhost:3000`.

## Example Routes

- `GET /`: Returns a simple welcome message.