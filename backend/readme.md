# Backend Application

## Tech Stack
This project is built using:
- **Express.js** (for backend server)
- **Prisma** (for database ORM)
- **TypeScript** (for type safety and better development experience)

## Installation

Follow the steps below to set up and run the backend application:

### 1. Install Dependencies
Run the following command to install all necessary dependencies:
```sh
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and provide your **DATABASE_URL**:
```env
DATABASE_URL=your-database-url-here
```

### 3. Run Database Migrations
After setting up the database URL, apply migrations using Prisma:
```sh
npx prisma migrate dev
```

If needed, generate Prisma client:
```sh
npx prisma generate
```

### 4. Build the Application (if needed)
If there is no `dist` folder inside this directory, run the following command to build the application:
```sh
npm run build
```

### 5. Start the Server
Once the dependencies are installed and the application is built, start the server using:
```sh
npm run start
```

## Additional Information
- Ensure you have **Node.js** installed before running the commands.
- Modify environment variables as needed before running the application.
- For development, you may use `npm run dev` if a development script is available.

Happy coding!

