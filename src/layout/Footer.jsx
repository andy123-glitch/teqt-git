import logo from '../assets/images/logo-dark-mode.svg';

export default function Footer(){
    return (
      <footer>
        <img src={logo} />
        <div> © 2020 Kasa. All rights reserved</div>
      </footer>
    );
}