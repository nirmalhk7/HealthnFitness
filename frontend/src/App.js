import React from "react";
// import logo from "./logo.svg";

import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/store/configureStore";
import { NotificationManager, NotificationContainer } from "react-notifications";

export const createNotification = (type, title, body, delay) => {
  if (!delay) {
    delay = 1000;
  }
  switch (type) {
    case "info":
      NotificationManager.info(title);
      break;
    case "success":
      NotificationManager.success(body, title, delay);
      break;
    case "warning":
      NotificationManager.warning(title, body, delay);
      break;
    case "error":
      NotificationManager.error(title, body, delay);
      break;
    default:
      NotificationManager.warning("invalid notification type", body, delay);
      break;
  }
};

const store = ConfigureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NotificationContainer />
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
