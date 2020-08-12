import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';
import SplashScreen from './components/splash-screen';
import HomePage from './pages/home-page';
import Background from './pages/shared-components/background';
import Navbar from './pages/shared-components/navbar';
import logOut from './helpers/user-log/log-out';
import { UserContextProvider } from './helpers/user-context/user-context';

const SearchPage = React.lazy(() => import('./pages/search-page'));
const CollectionsPage = React.lazy(() => import('./pages/collections-page/collections-page'));
const CollectionPage = React.lazy(() => import('./pages/collection-page/collection-page'));

const App = () => {
    const wasPlayed =
        sessionStorage.wasPlayed && JSON.parse(sessionStorage.wasPlayed)
            ? JSON.parse(sessionStorage.wasPlayed)
            : false;

    return (
        <UserContextProvider>
            <BrowserRouter>
                {!wasPlayed ? <SplashScreen /> : null}
                <Background>
                    <Navbar logOut={logOut} />
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />} />
                        <Suspense fallback={<div>{'Hello world'}</div>}>
                            <Route path="/search" render={() => <SearchPage />} />
                            <Route exact path="/collections" render={() => <CollectionsPage />} />
                            <Route
                                exact
                                path="/collections/:collectionId/:collectionName"
                                render={({ match }) => (
                                    <CollectionPage
                                        collectionId={match.params.collectionId}
                                        collectionName={match.params.collectionName}
                                    />
                                )}
                            />
                        </Suspense>
                    </Switch>
                </Background>
            </BrowserRouter>
        </UserContextProvider>
    );
};

export default App;
