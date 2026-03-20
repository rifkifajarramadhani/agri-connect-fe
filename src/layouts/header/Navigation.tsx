import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { links } from "@/types/header";
import { Link } from "@tanstack/react-router";
import { ChartCandlestick, House, Users } from "lucide-react";

const Navigation = () => {
  const navLinks: links[] = [
    { name: "Home", icon: <House size={16} className="mr-1" />, to: "/" },
    {
      name: "Communities",
      icon: <Users size={16} className="mr-1" />,
      to: "/communities",
    },
    {
      name: "Market",
      icon: <ChartCandlestick size={16} className="mr-1" />,
      to: "/market",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <NavigationMenuLink asChild>
              <Link
                to={link.to}
                activeProps={{ className: "text-green-700 bg-green-50" }}
                activeOptions={{ exact: link.to === "/" }}
                className="text-black text-sm font-medium flex items-center"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
