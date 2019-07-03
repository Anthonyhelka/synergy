import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Container, Header, List, Dropdown } from 'semantic-ui-react';

import ChampionTile from './ChampionTile';

class ChampionsClasses extends Component {
  constructor(props) {
    super(props);
    this.state={
      assassin: [],
      blademaster: [],
      brawler: [],
      elementalist: [],
      guardian: [],
      gunslinger: [],
      knight: [],
      ranger: [],
      shapeshifter: [],
      sorcerer: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/champions/classes')
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
          assassin: body.assassin,
          blademaster: body.blademaster,
          brawler: body.brawler,
          elementalist: body.elementalist,
          guardian: body.guardian,
          gunslinger: body.gunslinger,
          knight: body.knight,
          ranger: body.ranger,
          shapeshifter: body.shapeshifter,
          sorcerer: body.sorcerer
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    this.state.assassin.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let assassin = this.state.assassin.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.blademaster.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let blademaster = this.state.blademaster.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.brawler.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let brawler = this.state.brawler.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.elementalist.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let elementalist = this.state.elementalist.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.guardian.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let guardian = this.state.guardian.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.gunslinger.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let gunslinger = this.state.gunslinger.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.knight.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let knight = this.state.knight.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.ranger.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let ranger = this.state.ranger.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.shapeshifter.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let shapeshifter = this.state.shapeshifter.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });

    this.state.sorcerer.sort((a, b) => parseFloat(a.tier) - parseFloat(b.tier));
    let sorcerer = this.state.sorcerer.map(champion => {
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
              <Dropdown.Item text='Origin Synergies' as={ Link } to='/champions/origins' />
              <Dropdown.Item text='Class Synergies' as={ Link } to='/champions/classes' active />
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
              <Header as='h3'>Assassin</Header>
              <List horizontal>
                {assassin}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Blademaster</Header>
              <List horizontal>
                {blademaster}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Brawler</Header>
              <List horizontal>
                {brawler}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Elementalist</Header>
              <List horizontal>
                {elementalist}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Guardian</Header>
              <List horizontal>
                {guardian}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Gunslinger</Header>
              <List horizontal>
                {gunslinger}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Knight</Header>
              <List horizontal>
                {knight}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Ranger</Header>
              <List horizontal>
                {ranger}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Shapeshifter</Header>
              <List horizontal>
                {shapeshifter}
              </List>
            </Container>
          </div>

          <div>
            <Container fluid textAlign='center'>
              <Header as='h3' className='sub-header'>Sorcerer</Header>
              <List horizontal>
                {sorcerer}
              </List>
            </Container>
          </div>

        </div>
        </Container>

      </div>
    )
  }
}

export default ChampionsClasses;
