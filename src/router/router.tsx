import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


// HEADER IMPORT
import Header from '../header';

// LOADING IMPORT
import Loading from '../Loading';

const Panel = lazy(() => import('../component/panel'));
const jsonChallenge = lazy(() => import('../component/JsonChallenge'));
const Optional = lazy(() => import('../component/Optional'));

function router() {
    return (
        <Router>
            <Header />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path="/panel" component={Panel} />
                    <Route path="/jsonChallenge" component={jsonChallenge} />
                    <Route path="/Optional" component={Optional} />
                    <Redirect from="*" to="/panel" />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default router
