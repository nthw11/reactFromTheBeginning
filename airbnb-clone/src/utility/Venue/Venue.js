// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Venue extends Component {
//   render() {
//     const {
//       id,
//       title,
//       location,
//       rating,
//       pricePerNight,
//       imageUrl,
//     } = this.props.venue;
//     return (
//       <div className='col s12'>
//         <Link to={`/venue/${id}`}>
//           <div className='image'>
//             <img src={imageUrl} alt={title} />
//           </div>
//           <div>{title}</div>
//           <div className='price'>{pricePerNight}/night average</div>
//           <div className='rating'>{rating}</div>
//           <div>{location}</div>
//         </Link>
//       </div>
//     );
//   }
// }

// export default Venue;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Venue extends Component {
  render() {
    // console.log(this.props.city);
    const {
      id,
      title,
      location,
      pricePerNight,
      imageUrl,
      rating,
    } = this.props.venue;
    return (
      <div className='venue col s12'>
        <Link to={`/venue/${id}`}>
          <div className='image'>
            <img src={imageUrl} alt='venue' />
          </div>
          <div className='location-stars'>
            <span className='location'>{location}</span>
            <span className='rating right'>
              <i className='material-icons'>star</i>
              {rating}
            </span>
          </div>
          <div className='title'>${title}</div>
          <div className='price-per-night'>${pricePerNight}/night</div>
        </Link>
      </div>
    );
  }
}

export default Venue;
