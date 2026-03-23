import "./App.css";

export default function Loader() {
  return (
    <div className="hk-loader">

      <div className="ring"></div>

      <div className="logo-wrapper">
        <h1 className="logo">
          <span className="hk">HK</span>
          <span className="fitness">FITNESS</span>
        </h1>

        <div className="loading-line">
          <div className="loading-progress"></div>
        </div>

      </div>

    </div>
  );
}