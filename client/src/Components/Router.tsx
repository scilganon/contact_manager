import * as React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Stub } from "./Stub";
import { Intro } from "./Intro";
import { Unauthorized } from "./Unauthorized";
import { UserList } from "./UserList"
import { EditUser } from "./EditUser";
import { AuthStore } from "../services/Auth";
import { ROLES } from "../../../common/roles";

const PrivateRoute: any = ({ component: Component, roles = [], ...rest }: any) => (
    <Route
        {...rest}
        render={props => {
            if(!AuthStore.isAuthentificated) {
                return <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />;
            }

            if(!roles.find((role: ROLES) => role === AuthStore.role)) {
                return <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />;
            }

            return (
                <Component {...props} />
            );
        }

        }
    />
);

export const AppLayout = (
    <Router>
        <div className="app-layout">
            <Route path="/" exact component={Intro} />
            <Route path="/login" exact render={() => AuthStore.isAuthentificated ? <Redirect to={{
                pathname: "/",
            }} /> : <Unauthorized />}>
            </Route>
            <PrivateRoute path="/users" roles={[ROLES.ADMIN]} exact component={UserList} />
            <PrivateRoute path="/users/:id" roles={[ROLES.ADMIN]}  exact component={EditUser} />
            <PrivateRoute path="/info" roles={[ROLES.USER]}  component={Stub} />
        </div>
    </Router>
);