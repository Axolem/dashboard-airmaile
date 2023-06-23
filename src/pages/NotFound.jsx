import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    return () => {
      const baseUrl = window.location.origin;

      const head = document.querySelector("head");

      const scriptTag = document.createElement("script");
      scriptTag.src = `${baseUrl}/404.js`;
      scriptTag.crossOrigin = "anonymous";
      head.appendChild(scriptTag);

      document.title = "404 - Not Found";

      const cssTag = document.createElement("link");
      cssTag.rel = "stylesheet";
      cssTag.href = `${baseUrl}/404.css`;
      head.appendChild(cssTag);
    };
  }, []);

  return (
    <>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we cant find what you are looking for 'cuz its so dark in here
        </h3>
        <a className="no-underline text-center" id="home-link" href="/">
          <span className="text-900 text-2xl no-underline text-center">
            Click anywhere to go back.
          </span>
        </a>
      </div>
      <div className="torch" />
    </>
  );
};

export default NotFound;
