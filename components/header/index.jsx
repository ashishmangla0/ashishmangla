import Link from 'next/link';
import style from './style.module.scss';
const Header = () => {
  return (
    <nav className={style.header}>
      <div className="" role="list">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>about</a>
        </Link>

        <Link href="/">
          <a>projects</a>
        </Link>
        <Link href="/">
          <a>contacts</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
