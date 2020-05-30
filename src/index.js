import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import LoginComponent from './components/LoginComponent';
import UserComponent from './components/UserComponent';
import ShopComponent from './components/ShopComponent';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

function App(){
    return (
        <Router>
            <AppContainer>
                <Switch>
                    <Route path="/login">
                        <LoginComponent/>
                    </Route>
                    <Route path="/user">
                        <UserComponent/>
                    </Route>
                    <Route path="/shop">
                        <ShopComponent/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </AppContainer>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));