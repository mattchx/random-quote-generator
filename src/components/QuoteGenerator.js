import React from 'react';
import Button from './Button';
// import Typography from '@material-ui/core/Typography';
    

const QuoteGenerator = (props) => (
    //* <React.Fragment> = <> uses the quote and author keys from the props.state.quotes array*
    <> 
        {props.selectedQuote ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}` : ''}
        <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
    </>
)

export default QuoteGenerator