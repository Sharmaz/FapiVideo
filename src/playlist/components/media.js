import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
  /*constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      author: props.author
    }
  }*/
  state = {
    author: 'Ivan Robles'
  }
  handleClick = (event) => {
    //console.log(this.props.title);
    this.setState({
      author: 'Emmanuel Alonso'
    })
  }
  render() {
    const { title, author, cover } = this.props;

    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={cover}
            alt=""
            width={240}
            height={160}
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Media;
