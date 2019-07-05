import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

class ChampionsOrigins extends Component {
  constructor(props) {
    super(props);
    this.state={
      demon: [],
      dragon: [],
      exile: [],
      glacial: [],
      imperial: [],
      ninja: [],
      noble: [],
      phantom: [],
      pirate: [],
      robot: [],
      void: [],
      wild: [],
      yordle: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/origins')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
        })
      .then(response => response.json())
      .then(body => {
        this.setState({
          demon: body.demon[0].champions,
          dragon: body.dragon[0].champions,
          exile: body.exile[0].champions,
          glacial: body.glacial[0].champions,
          imperial: body.imperial[0].champions,
          ninja: body.ninja[0].champions,
          noble: body.noble[0].champions,
          phantom: body.phantom[0].champions,
          pirate: body.pirate[0].champions,
          robot: body.robot[0].champions,
          void: body.void[0].champions,
          wild: body.wild[0].champions,
          yordle: body.yordle[0].champions
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    this.state.demon.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let demon = this.state.demon.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='home' as={ Link } to='/' >
            <img src={require('../../../../public/favicon.ico')} />
          </Menu.Item>
          <Dropdown item text='Champions'>
            <Dropdown.Menu>
              <Dropdown.Item text='Overview' as={ Link } to='/champions/overview' />
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' active />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' />
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name='items' as={ Link } to='/items' >
            <p>Items</p>
          </Menu.Item>
          <Menu.Item name='news' as={ Link } to='/news' >
            <p>News</p>
          </Menu.Item>
        </Menu>

        <Container>
          <div>
            <div>
              <Container fluid textAlign='center'>
                <Header as='h3'>Demon</Header>
                <List horizontal>
                  {demon}
                </List>
              </Container>
            </div>

          </div>
        </Container>
      </div>
    )
  }
}

export default ChampionsOrigins;
