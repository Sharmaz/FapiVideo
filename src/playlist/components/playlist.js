import React, { Component } from 'react';
import Media from './media.js';
import PropTypes from 'prop-types';
import './playlist.css';

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
