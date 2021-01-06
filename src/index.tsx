import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";
import { AnswersContext } from "yext-answers-react";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

type ToastProps = {
  children: React.ReactNode;
};

const MyCustomToast = ({ children }: ToastProps) => (
  <div className="">{children}</div>
);

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider components={{ Toast: MyCustomToast }}>
      <AnswersContext
        config={{
          runSearchOnLoad: true,
          apiKey: "a59283fd20d998993e96988674ef4dbc",
          experienceKey: "h_blue_pim",
          experienceVersion: "PRODUCTION",
          locale: "en",
          verticalKey: "products",
        }}
      >
        <App />
      </AnswersContext>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
