import React, { Component } from 'react';
import Media from './media.js';
import PropTypes from 'prop-types';
import './playlist.css';
import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/full-screen';

class Playlist extends Component {
  render() {
    let counter = 0;
    const category = this.props.data.categories
    // const playlist = this.props.data.categories[counter].playlist;

    console.log(this.props.data);
    return (
      <div className="Category">
        {
          category.map((item) => {
            console.log(item);
            const playlist = item.playlist;
            return (
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="Playlist">
                  <Play
                    size={50}
                    color="gray"
                  />
                  <Pause
                    size={50}
                    color="gray"
                  />
                  <Volume
                    size={50}
                    color="gray"
                  />
                  <FullScreen
                    size={50}
                    color="gray"
                  />
                  {
                    playlist.map((item) => {
                      return <Media {...item} key={item.id}/>;
                    })
                  } 
                </div>
              </div>
            )
          })
        } 
      </div>
    )
  }
}

export default Playlist;
