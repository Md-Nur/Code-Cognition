import { ReactNode } from "react";
import NavRoutes from "./NavRoutes";

const Drawer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <NavRoutes />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
