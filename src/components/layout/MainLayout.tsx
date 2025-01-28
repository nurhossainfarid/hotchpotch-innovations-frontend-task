import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { themeHandler } from "@/utils/themeHandler";
import TrustedCustomer from "../TrustedCustomer";
import Result1 from "../../assets/result1.png";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import { Button } from "../ui/button";
import Service from "../service/Service";

const MainLayout = () => {
  const { theme } = useTheme();
  const { bgColor } = themeHandler({ theme });

  return (
    <div
      className={cn(
        "pt-2 pb-10",
        theme === "dark" ? "bg-midnight-eclipse" : `bg-${bgColor}`
      )}
    >
      <div>
        <Header theme={theme} />
      </div>
      <Service />
      <Outlet />
    </div>
  );
};

export default MainLayout;
