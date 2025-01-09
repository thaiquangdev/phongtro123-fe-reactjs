import { createContext, ReactNode, useContext, useState } from "react";

// Định nghĩa kiểu dữ liệu cho context
interface SidebarContextProps {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

// tạo context
const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

// hook sử dụng context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSideBar must be used within a SideBarProvider");
  }
  return context;
};

// Tạo provider cho context
interface SideBarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SideBarProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
