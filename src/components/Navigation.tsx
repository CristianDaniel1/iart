import { NavLink } from 'react-router-dom';

type Active = { isActive: boolean };

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-8 text-xl">
        <li className="hover:text-primary duration-200">
          <NavLink
            to="/"
            className={({ isActive }: Active) =>
              isActive ? 'text-primary' : ''
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-primary duration-200">
          <NavLink
            to="/artes"
            className={({ isActive }: Active) =>
              isActive ? 'text-primary' : ''
            }
          >
            Artes
          </NavLink>
        </li>
        <li className="hover:text-primary duration-200">
          <NavLink
            to="/exemplos"
            className={({ isActive }: Active) =>
              isActive ? 'text-primary' : ''
            }
          >
            Exemplos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
