import { useState } from 'react';
import { SidebarContext } from './CreateContexts';

const SidebarProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <SidebarContext value={{ openSidebar, setOpenSidebar }}>
      {children}
    </SidebarContext>
  );
};

export default SidebarProvider;
