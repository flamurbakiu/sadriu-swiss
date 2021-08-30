import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import AppContext from '../../store/AppContext';
import logo from '../../assets/images/logonew.png';
import shortlogo from '../../assets/images/short-logo.png';
import french from '../../assets/images/french.png';
import ger from '../../assets/images/ger.png';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Header.css';

function Header() {
  const node = useRef();
  const [backColor, setBackColor] = useState('transparent');
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [element1Active, setElement1Active] = useState('');
  const [element2Active, setElement2Active] = useState('');
  const [element3Active, setElement3Active] = useState('');

  const [locale, setLocale] = useContext(AppContext);
  console.log(locale);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setBackColor('transparent');
      } else {
        setBackColor('white');
      }
    };
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      setShowMenu(false);
    };
    const listener = (event) => {
      if (!node.current || node.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [node]);

  const handleLanguage = (language) => {
    setLocale(language);
  };

  return (
    <div className='header' style={{ background: backColor }} ref={node}>
      <div className='left-side'>
        <div className='logo-title-part'>
          <Link to='/'>
            <img src={logo} alt='logo' className='complete-logo' />
          </Link>
          <Link to='/' className='short-logo'>
            <img src={shortlogo} width={80} alt='logo' />
          </Link>
        </div>
      </div>

      <div className='middle'>
        <ul>
          <li>
            <Link to='/unser-leistungsangebot'>
              <div className='icon'>
                <SettingsOutlinedIcon />
              </div>
              <FormattedMessage
                id='services'
                defaultMessage='Unser Leistungsangebot'
              />
            </Link>
          </li>
          <li>
            <Link to='/referenzen'>
              <div className='icon'>
                <PermMediaOutlinedIcon />
              </div>
              <FormattedMessage id='references' defaultMessage='Referenzen' />
            </Link>
          </li>
          <li>
            <Link to='/ueber-uns'>
              <div className='icon'>
                <GroupOutlinedIcon />
              </div>
              <FormattedMessage id='aboutUs' defaultMessage='Über uns' />
            </Link>
          </li>
        </ul>
      </div>

      <div className='right-side'>
        <ul>
          <li>
            <p>DE</p>
            <img
              src={ger}
              style={{ width: '35px' }}
              alt='ge-icon'
              onClick={() => handleLanguage('de')}
            />
          </li>
          <li>
            <p>FR</p>
            <img
              src={french}
              style={{ width: '35px' }}
              alt='fr-icon'
              onClick={() => handleLanguage('fr')}
            />
          </li>
          <li>
            <MenuIcon
              className='menu-icon'
              onClick={() => setShowMenu(!showMenu)}
            />
          </li>
        </ul>
      </div>

      <div className={showMenu ? 'sidenavOpen' : 'sidenav'}>
        <div className={'logoContainer'}>
          <a className={'close'} onClick={() => setShowMenu(false)}>
            &times;
          </a>
          <Link to='/'>
            <img src={logo} alt='logo' className='complete-logo' />
          </Link>
          <Link to='/' className='short-logo'>
            <img src={shortlogo} width={80} alt='logo' />
          </Link>
        </div>
        <ul className='header-list'>
          <li>
            <Link to='/unser-leistungsangebot'>
              <FormattedMessage
                id='services'
                defaultMessage='Unser Leistungsangebot'
              />
            </Link>
          </li>
          <li>
            <Link to='/referenzen'>
              <FormattedMessage id='references' defaultMessage='Referenzen' />
            </Link>
          </li>
          <li>
            <Link to='/ueber-uns'>
              <FormattedMessage id='aboutUs' defaultMessage='Über uns' />
            </Link>
          </li>
        </ul>
        <div className='header-social'>
          <a
            className='facebook'
            href='https://www.facebook.com/sadriuabdichtungen'
            target='_blank'
          >
            <FacebookIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className='instagram'
            href='https://www.instagram.com/sadriuabdichtungen/'
            target='_blank'
          >
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>
          <a
            className='linkedin'
            href='https://www.instagram.com/sadriuabdichtungen/'
            target='_blank'
          >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
