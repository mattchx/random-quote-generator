import React from 'react';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import QuoteGenerator from './components/QuoteGenerator';
import { withStyles } from '@material-ui/core/styles';


//import './App.css';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
    //if a function uses this. -> we need to bind here to the construtor 
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }
  // ###PROPS###
  // set state needs to been done on a single line as this function is asynchronous
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex)); //quotes:quotes object array 
  }

  get selectedQuote() { // can call this function as if it were a variable
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      // eslint-disable-next-line
      return; //undefined
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  } //returning the quote at the desired index
  /** 
  * Returns an integer representing an index in state.quotes
  **/
  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return; // undefined
    }
    return Math.floor(Math.random() * this.state.quotes.length - 1) + 1;
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
  }

  // render is run once state is updated
  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          {/*Only run QuoteGenerator when it recieves data*/}
          {
            this.selectedQuote ?
              <QuoteGenerator selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
              : null
          }
        </Grid>
      </Grid>
    );
  }
}

//export default App;
export default withStyles(styles)(App);
