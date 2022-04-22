import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-1 space-x-5">
      <span className="text-4xl leading-normal">Navbar goes here</span>
      <span className="text-center space-x-5">
        <Link to={'/home'} className="underline">
          / Home
        </Link>
        <Link to={'/about'} className="underline">
          / About
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
