import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, BookDetails } from './index'
import { fetchBooks } from '../actions/books';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    const { books } = this.props;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} books={books} />;
            }}
          />
          <Route
            path="/:id"
            render={(props) => {
              return <BookDetails {...props} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

App.propTypes = {
  books: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
