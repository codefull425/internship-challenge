import Clock from './Clock';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Sistema de Cálculo</h1>
        <div className="header-right">
          <Clock />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

