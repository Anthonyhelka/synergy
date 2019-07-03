import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

class ChampionsContainer extends Component {
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
    fetch('/api/v1/champions')
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
          demon: body.demon,
          dragon: body.dragon,
          exile: body.exile,
          glacial: body.glacial,
          imperial: body.imperial,
          ninja: body.ninja,
          noble: body.noble,
          phantom: body.phantom,
          pirate: body.pirate,
          robot: body.robot,
          void: body.void,
          wild: body.wild,
          yordle: body.yordle
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

    this.state.dragon.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let dragon = this.state.dragon.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.exile.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let exile = this.state.exile.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.glacial.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let glacial = this.state.glacial.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.imperial.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let imperial = this.state.imperial.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.ninja.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let ninja = this.state.ninja.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.noble.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let noble = this.state.noble.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.phantom.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let phantom = this.state.phantom.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.pirate.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let pirate = this.state.pirate.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.robot.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let robot = this.state.robot.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.void.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let voidOrigin = this.state.void.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.wild.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let wild = this.state.wild.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.yordle.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let yordle = this.state.yordle.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    
    return(
      <div>

        <div>
          <Menu size='large' >
            <Menu.Item name='home' as={ Link } to='/' >
              <img src={require('../../../../public/favicon.ico')} />
            </Menu.Item>
            <Menu.Item name='champions' as={ Link } to='/champions' active >
              <p>Champions</p>
            </Menu.Item>
            <Menu.Item name='items' as={ Link } to='/items' >
              <p>Items</p>
            </Menu.Item>
            <Menu.Item name='news' as={ Link } to='/news' >
              <p>News</p>
            </Menu.Item>
          </Menu>
        </div>
        <Container>

        <div>
          <h1 className='main-header'>Origin Synergies</h1>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Demon</Header>
              <List horizontal>
                {demon}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Dragon</Header>
              <List horizontal>
                {dragon}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Exile</Header>
              <List horizontal>
                {exile}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Glacial</Header>
              <List horizontal>
                {glacial}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Imperial</Header>
              <List horizontal>
                {imperial}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Ninja</Header>
              <List horizontal>
                {ninja}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Noble</Header>
              <List horizontal>
                {noble}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Phantom</Header>
              <List horizontal>
                {phantom}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Pirate</Header>
              <List horizontal>
                {pirate}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Robot</Header>
              <List horizontal>
                {robot}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Void</Header>
              <List horizontal>
                {voidOrigin}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Wild</Header>
              <List horizontal>
                {wild}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Yordle</Header>
              <List horizontal>
                {yordle}
              </List>
            </Container>
          </div>

        </div>
        </Container>

      </div>
    )
  }
}

export default ChampionsContainer;
