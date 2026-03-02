import logo from '@assets/images/logo-dark-mode.svg';
import './style.scss';

export default function Footer() {
  return (
    <footer role="status">
      <img src={logo} alt="Logo de Kase en blanc" height="40px" width="122px" />
      <div> © 2020 Kasa. All rights reserved</div>
    </footer>
  );
}
