import React, { Component  } from "react";
import './style.css';

export default class TopicQualitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick = (topic, image) => {    
    this.props.handleQualityChoose(topic, image);
  }

  render() {
    const { image, idChoseQuality, topic } = this.props;

    return(
      <div className='topic-quality-item' onClick={() => this.handleClick(topic, image)}>
          <img src={image.url} alt={image.text} className='topic-quality-image'/>

          <div className='image-checkbox'>
            <div className={`${idChoseQuality == image.id ? 'card-circle card-circle-active' : 'card-circle'}`}></div>
            <span>{image.text}</span>
          </div>
      </div>
    );
  }
}