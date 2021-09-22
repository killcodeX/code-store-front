import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/theme";
import { useSelector } from "react-redux";
import Home from "./Container/Home";
import Login from "./Container/Auth/login";
import Register from "./Container/Auth/register";
import ProtectedRoutes from "./protectedRoutes";

function App() {
  const theme = useSelector((state: any) => state.post.theme);
  const auth = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
      <div className="position-relative">
        <Switch>
          <ProtectedRoutes auth={auth} path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
