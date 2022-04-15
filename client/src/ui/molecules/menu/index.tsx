import InternalLink from "../../atoms/internal-link";
import { MenuEntry, Submenu } from "../submenu";

interface MenuProps {
  menu: MenuEntry;
  isOpen: boolean;
  toggle: (id: string) => void;
}

export const Menu = ({ menu, isOpen, toggle }: MenuProps) => {
  return (
    <li key={menu.id} className="top-level-entry-container">
      <button
        type="button"
        id={`${menu.id}-button`}
        className="top-level-entry menu-toggle"
        aria-controls={menu.id}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => {
          toggle(menu.id);
        }}
      >
        {menu.label}
      </button>

      {menu.to && (
        <InternalLink
          to={menu.to}
          className="top-level-entry"
          // @ts-ignore
          onClick={() => document?.activeElement?.blur()}
        >
          {menu.label}
        </InternalLink>
      )}

      <Submenu submenuId={menu.id} menuEntry={menu} defaultHidden={!isOpen} />
    </li>
  );
};
