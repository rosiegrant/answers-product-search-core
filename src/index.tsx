import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

type ToastProps = {
  children: React.ReactNode;
};

const MyCustomToast = ({ children }: ToastProps) => (
  <div className="bg-white border shadow-xl z-50 rounded mb-12 mr-4 mt-4 px-8 py-4">
    {children}
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider components={{ Toast: MyCustomToast }}>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
