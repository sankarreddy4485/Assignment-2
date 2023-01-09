import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/questions'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Questions
      </NavLink>
      
    </nav>
  );
};
export default Navbar;
