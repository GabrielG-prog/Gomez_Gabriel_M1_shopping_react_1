import React from 'react';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import Root from "./navigation/Root";

export default function App() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
