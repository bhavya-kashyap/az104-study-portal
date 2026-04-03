// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoursePage from '../pages/CoursePage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/courses' component={CoursePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
