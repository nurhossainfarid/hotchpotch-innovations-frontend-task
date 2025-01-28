import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { themeHandler } from "@/utils/themeHandler";

const MainLayout = () => {
  const { theme } = useTheme();
  const { bgColor } = themeHandler({ theme });

  return (
    <div>
      <div
        className={cn(
          "pt-2 pb-10",
          theme === "dark" ? "bg-midnight-eclipse" : `bg-${bgColor}`
        )}
      >
        <Header theme={theme} />
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default MainLayout;
