import React, { Component } from 'react';
import { Link } from 'react-router';
import { List, Menu } from 'semantic-ui-react';

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
    this.state.demon.sort();
    this.state.glacial.sort();
    let demon = this.state.demon.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let dragon = this.state.dragon.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let exile = this.state.exile.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let glacial = this.state.glacial.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let imperial = this.state.imperial.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let ninja = this.state.ninja.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let noble = this.state.noble.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let phantom = this.state.phantom.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let pirate = this.state.pirate.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let robot = this.state.robot.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let voidOrigin = this.state.void.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
    let wild = this.state.wild.map(champion => {
      return (
        <ChampionTile
          key={champion.id}
          id={champion.id}
          champion={champion}
        />
      )
    });
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
        <div>
          <h1 className='main-header'>Champions</h1>

          <div>
            <h3 className='sub-header'>Demon</h3>
            <List horizontal>
              {demon}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Dragon</h3>
            <List horizontal>
              {dragon}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Exile</h3>
            <List horizontal>
              {exile}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Glacial</h3>
            <List horizontal>
              {glacial}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Imperial</h3>
            <List horizontal>
              {imperial}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Ninja</h3>
            <List horizontal>
              {ninja}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Noble</h3>
            <List horizontal>
              {noble}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Phantom</h3>
            <List horizontal>
              {phantom}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Pirate</h3>
            <List horizontal>
              {pirate}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Robot</h3>
            <List horizontal>
              {robot}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Void</h3>
            <List horizontal>
              {voidOrigin}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Wild</h3>
            <List horizontal>
              {wild}
            </List>
          </div>

          <div>
            <h3 className='sub-header'>Yordle</h3>
            <List horizontal>
              {yordle}
            </List>
          </div>

        </div>
      </div>
    )
  }
}

export default ChampionsContainer;
