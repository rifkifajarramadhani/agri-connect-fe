import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/store/auth-store";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Account = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="relative flex justify-between items-center gap-2">
      <DropdownMenu
        open={isProfileMenuOpen}
        onOpenChange={setIsProfileMenuOpen}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-0! py-0! rounded-full w-12 h-12"
          >
            {!isLoggedIn ? (
              <User color="black" className="h-6! w-6!" />
            ) : (
              <img
                src={user?.avatarUrl || "https://placehold.co/40?text=Me"}
                alt="Profile"
                className="rounded-full"
              />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start">
          {!isLoggedIn ? (
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <a href="/login">Log In</a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ) : (
            <>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Account;
