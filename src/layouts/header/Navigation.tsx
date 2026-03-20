import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { links } from "@/types/header";
import { ChartCandlestick, House, Users } from "lucide-react";

const Navigation = () => {
  const navLinks: links[] = [
    { name: "Home", icon: <House size={16} className="mr-1" />, href: "#" },
    {
      name: "Communities",
      icon: <Users size={16} className="mr-1" />,
      href: "#",
    },
    {
      name: "Market",
      icon: <ChartCandlestick size={16} className="mr-1" />,
      href: "#",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <NavigationMenuLink asChild>
              <a
                href={link.href}
                className="text-black text-sm font-medium flex items-center"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
