# Box Movie


### Developer: Bandele Femi

This is a web application for searching and saving movie titles. The app is built using Next.js for the frontend and ASP.NET Core for the backend.

## Workflow

### 1. Homepage

- When you visit the homepage of the app, you will see the search component.
- The search component allows you to enter a movie title that you want to search for.

### 2. Searching for a Movie

- Enter the movie title in the search input field.
- When you click the search icon, the frontend sends a request to the OMDB API (http://www.omdbapi.com/) to fetch information about the movie based on the entered title.
- The OMDB API responds with information about the movie, including its title, poster, description, IMDB score, and more.

### 3. Saving the Movie Title

- After fetching movie information from the OMDB API, the frontend sends the movie title to the backend database through the ASP.NET API.

### 4. Backend Database

- The backend, built with ASP.NET Core, receives the movie title from the frontend.
- The title is stored in the database for later retrieval.

### 5. Routed Page

- Once the movie title is saved in the database and adds it to list of recent queries, 
you can view it on a separate routed page.
- The routed page uses the `useEffect` hook to fetch the saved movie title from the movie API.
- The title is displayed on the page, and additional details can be retrieved as needed.

## Technologies Used

- Next.js: Frontend framework for building React applications.
- ASP.NET Core: Backend framework for building web APIs.
- OMDB API: External API for fetching movie information.
- SQL Server: (Azure data studio and Docker) Database for storing saved movie titles.

## How to Run the App

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Start the frontend server with `npm run dev`.
4. Navigate to the `backend` directory and open it in Visual Studio or your preferred IDE.
5. Start the backend server.
6. Access the app at `http://localhost:3000` in your web browser.

Happy movie searching and saving!
