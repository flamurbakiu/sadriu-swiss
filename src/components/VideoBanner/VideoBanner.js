import Video from '../../assets/videos/video.mov';
import Image from '../../assets/images/wallpaper-mobile.jpeg';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import './VideoBanner.css';
import { FormattedMessage } from 'react-intl';

function VideoBanner() {
  return (
    <div className='container'>
      <LazyLoad height={200}>
        <video
          autoPlay
          autobuffer
          loop
          muted
          preload='auto'
          className='video-banner'
        >
          <source src={Video} type='video/mp4' />
        </video>
      </LazyLoad>

      <LazyLoad height={200}>
        <img src={Image} alt='Image Banner' className='image-banner' />
      </LazyLoad>

      <div className='visit-us'>
        <Link to='/ueber-uns'>
          <p>
            <FormattedMessage id='visitUs1' defaultMessage='Besuchen' />
            <br />
            <FormattedMessage id='visitUs2' defaultMessage='Sie uns!' />
          </p>
        </Link>
      </div>

      <div className='contact-box'>
        <div className='contact-box-container'>
          <a
            href='mailto:info@sadriuabdichtungen.ch'
            style={{ display: 'flex', alignItems: 'center' }}
            className='mail'
          >
            <div>
              <MailIcon style={{ fontSize: '30' }} />
            </div>
            <div>
              <span style={{ marginLeft: 5 }}>MAIL</span>
            </div>
          </a>
        </div>
        <div className='contact-box-container'>
          <a
            href='tel:+41796617262'
            style={{ display: 'flex', alignItems: 'center' }}
            className='tel'
          >
            <div>
              <WhatsAppIcon style={{ fontSize: '30' }} />
            </div>
            <div>
              <span style={{ marginLeft: 5 }}>+41796617262</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
