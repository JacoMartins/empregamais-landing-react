import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

interface ContextProps {
  children: ReactNode;
}

export default function NavContext({ children }: ContextProps) {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const [currentPage, setCurrentPage] = useState(currentPath ? currentPath : 'home');

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {children}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}