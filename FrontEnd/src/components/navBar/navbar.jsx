import style from './navBar.module.css';
import logo from '../../assets/images/logo-aldux.svg' // Adjust the path as necessary

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}><img src={logo}></img></div>
      <ul className={style.navLinks}>
        <li className={style.navItem}>Productos</li>
        <li className={style.navItem}>Contacto</li>
        <li className={style.navItem}>Quiénes somos</li>
        <li className={style.navItem}>Cotización</li>
      </ul>
    </nav>
  );
};

export default NavBar;
