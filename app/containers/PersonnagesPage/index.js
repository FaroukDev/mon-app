/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';


import H1 from 'components/H1';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import messages from './messages';
import TablePerso from './TablePerso';

const myheader = new Headers({
  'Content-Type' : 'application/x-www-form-urlencoded',
})

const init = {
  method : 'GET',
  headers: myheader,
  mode: 'cors'
}

export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: 'a',
      persos: []
    };
  }

  componentDidMount = () => {
    this.handleCallAPIPerso('spider')
  }

  handleChange = event => {
    this.setState({ searchName: event.target.value });
  };

  handleSearch = () => {
    this.handleCallAPIPerso(this.state.searchName);
  }

  handleCallAPIPerso = (name)=> {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=b3ee1b80a4329537128049d2fa454a0d`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // eslint-disable-next-line no-console
        console.log("data-api:", data.data.results);
        this.setState({persos: data.data.results })
        
      })
      .catch(error => console.log(error));
      
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.searchName}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button 
          variant="contained" 
          color="primary"
          onClick = {this.handleSearch}>
          Rechercher
        </Button>
        <Checkbox />
        <TablePerso persos={this.state.persos}/>
      </div>
    );
  }
}

// je me suis arreté a 20 minutes
