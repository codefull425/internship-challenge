import Clock from './Clock';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Sistema de Cálculo</h1>
        <Clock />
      </div>
    </header>
  );
};

export default Header;

