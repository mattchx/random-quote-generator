import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


//* <React.Fragment> = <> uses the quote and author keys from the props.state.quotes array*
// *Object destructuring* props -> {assignNewQuoteIndex, selectedQuote}
// the argument props no longer has to be explicitly typed
const QuoteGenerator = ({assignNewQuoteIndex, selectedQuote}) => (
    <Card style={{backgroundColor:'rgb(227, 228, 151)'}}>
        <CardContent>
            {
                selectedQuote ?
                    (
                        <Typography id="text">
                            {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
                        </Typography>
                    ) : null
            }
            <CardActions>
                <Button id="new-quote" variant="contained" color='default' size='small' onClick={assignNewQuoteIndex}>Next Quote</Button>
                <IconButton 
                id="tweet-quote"
                target="_blank"
                href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}&hashtags=randomquote`)}
                >
                    <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
                </IconButton>    
           </CardActions>
        </CardContent>
    </Card>
)

export default QuoteGenerator;