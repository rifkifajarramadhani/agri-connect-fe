import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const Account = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex justify-between items-center gap-2">
        <img
          src="https://placehold.co/48?text=Me"
          alt="Profile"
          className="rounded-full"
        />
        <div className="flex flex-col justify-between items-start gap-2">
          <span className="text-beige text-sm">John Doe</span>
          <span className="text-beige text-sm">Farmer</span>
        </div>
        <DropdownMenu
          open={isProfileMenuOpen}
          onOpenChange={setIsProfileMenuOpen}
        >
          <DropdownMenuTrigger asChild>
            <Button variant="link" size="sm" className="ml-2">
              {isProfileMenuOpen ? (
                <ChevronUp color="beige" size={16} />
              ) : (
                <ChevronDown color="beige" size={16} />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Account;
