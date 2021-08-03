import { Container, LinearProgress } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { updateBookDetails } from '../actions/book';

class BookDetails extends React.Component{
    componentDidMount(){
        const {match} = this.props;

        if(match.params.id){
            this.props.dispatch(updateBookDetails(match.params.id));
        }
    }

    componentDidUpdate(prevProps){
        const {
            match:{params:prevParams},
        } = prevProps;

        const {
            match:{params:currParams},
        }=this.props;

        if(prevParams && currParams && prevParams.id !== currParams.id){
            this.props.dispatch(updateBookDetails(currParams.id));
        }
    }

    render(){
        const {book} = this.props.book;

        if(book===undefined){
            return <LinearProgress />;
        }else{
            return (
                <Container maxWidth="lg" className="book-details">
                    <div className="book-detail-title">
                        <h1>{book.volumeInfo.title}</h1>
                        -<h5>
                            {book.volumeInfo.authors}
                        </h5>
                    </div>
                    <div className="book-detail-content">
                        <img src={book.volumeInfo.imageLinks.medium} alt="" />
                        <p>{book.volumeInfo.subtitle}</p>
                    </div>
                </Container>
            );
        }
    }
}

function mapStateToProps(state) {
  return {
    book:state.book
  };
}

export default connect(mapStateToProps)(BookDetails);