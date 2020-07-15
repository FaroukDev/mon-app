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
import messages from './messages';

export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
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
      </div>
    );
  }
}

// je me suis arreté a 20 minutes
