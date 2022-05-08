import '../App.css';
import 'bulma/css/bulma.min.css';
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';
function Header() {
  const props = {
    items: [
      {
        text: 'About',
        link: '/',
      },
      {
        text: 'Services',
        link: '#docs',
      },
      {
        text: 'Projects',
        link: '#custom-bar',
      },
      {
        text: 'Contact',
        link: '#contact',
      },
    ],
    logo: {
      text: 'sunnyside',
    },
    style: {
      barStyles: {
        background: 'transparent',
        borderStyle: 'none',
        boxShadow: 'none',
      },
      sidebarStyles: {
        background: 'white',
        buttonColor: 'white',
        borderStyle: 'none',
      },
    },
  };
  return <Navbar {...props} />;
}

export default Header;
