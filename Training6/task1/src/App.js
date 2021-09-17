import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Info from "./pages/Info";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav";
import styled from 'styled-components';


const Container = styled.div`
display: flex;
width: 100%;
background-color: cyan;
justify-content: flex-start;

& .col-2{
  width: 100%;
}
`
function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);
  console.log("user new", user);
  console.log(isAuth);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact>
            {isAuth ? <Redirect to="/app" /> : <Login />}
          </Route>
          {isAuth ? (
            <div>
              <Header />
              <Container>
              <SideNav />
              <div className="col-2">
              <Route path="/app" exact>
                <Home />
              </Route>
              <Route path="/app/users">
                <Users />
              </Route>
              <Route path="/app/my-info">
                <Info user={user} />
              </Route>
              </div>
              </Container>
              <Footer />
            </div>
          ) : (
            ""          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
