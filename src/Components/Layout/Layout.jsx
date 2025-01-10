import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (!storedUser) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
