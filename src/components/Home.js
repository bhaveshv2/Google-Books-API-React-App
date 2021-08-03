import { Container, Grid, LinearProgress } from '@material-ui/core';
import React, { Component } from 'react';
import { Book } from './index';

class Home extends Component {
  render() {
    console.log(this.props.books.books);
    // const { items } = this.props.books.books;
    if (this.props.books.books === undefined) {
      return <LinearProgress />;
    } else {
      const { items } = this.props.books.books;
      return (
        <Container maxWidth="lg">
          <h1 className="home-heading">BOOKS</h1>
          <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">
            {items.map(book => <div key={book.id} className="book-card"> <Book book={book} key={book.id} /> </div>)}
          </Grid>
        </Container>
      );
    }
  }
}

export default Home;