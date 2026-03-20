import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { links } from "@/types/header";

const Navigation = () => {
  const navLinks: links[] = [
    { name: "Home", href: "#" },
    { name: "Network", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Forum", href: "#" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem>
            <NavigationMenuLink asChild key={link.name}>
              <a href={link.href} className="text-beige text-sm font-medium">
                {link.name}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
