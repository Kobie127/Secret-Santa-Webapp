import React, { useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../common/styles/header.styles.css';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="header">
    <img src={require("../../assets/images/logo.png")} className="Logo" alt="logo" />
   <CSSTransition
       in={!isSmallScreen || isNavVisible}
       timeout={350}
       classNames="NavAnimation"
       unmountOnExit
   >
       <nav className="Nav">
           <a href className="option" to='/'>
               Home
           </a>
           <a href className="option" to='/'>
               Articles
           </a>
           <a href className="option" to='/'>
               Most Wanted
           </a>
           <button>
               <a href className="option" to='/'>
                   Sign In 
               </a>
           </button>
       </nav>
   </CSSTransition>
   <button onClick={toggleNav} className="Burger">
       <ExpandMoreIcon/>
   </button>
</header>
  );
}
