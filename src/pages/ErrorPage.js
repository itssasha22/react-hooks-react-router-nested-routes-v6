import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Whoops! Something went wrong!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <a href="/">Go back to Home</a>
      </p>
    </div>
  );
};

export default ErrorPage;
