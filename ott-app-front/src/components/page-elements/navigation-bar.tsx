import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ClapperboardIcon,
  HomeIcon,
  SettingsIcon,
  TvMinimalPlayIcon,
} from "lucide-react";

const NavigationBar = () => {
  const [animatingButton, setAnimatingButton] = useState("");

  const handleFocus = (id: string) => {
    setAnimatingButton(id);
    setTimeout(() => setAnimatingButton(""), 300); // Reset after animation duration
  };
  return (
    <div className="navi-bar flex flex-col justify-between items-center bg-gray-600 h-full p-2 shadow-md">
      <div
        className={`profile pt-2 ${
          animatingButton === "profile" ? "animate-pop" : ""
        }`}
        onFocus={() => handleFocus("profile")}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button id="profile">
              <Avatar
                className={`border-solid border-gray-800 border-2 shadow-md `}
              >
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>Pr</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="profile-dropdown w-1/6 absolute left-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem> */}
              <DropdownMenuItem>
                Shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem>More...</DropdownMenuItem> */}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              {/* <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>GitHub</DropdownMenuItem> */}
            <DropdownMenuItem>Support</DropdownMenuItem>
            {/* <DropdownMenuItem disabled>API</DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="navi-buttons ">
        <button
          id="home"
          className={`${animatingButton === "home" ? "animate-pop" : ""}`}
          onClick={() => handleFocus("home")}
        >
          <HomeIcon size={32} />
        </button>
        <br />
        <button
          id="movie"
          className={`${animatingButton === "movie" ? "animate-pop" : ""}`}
          onClick={() => handleFocus("movie")}
        >
          <ClapperboardIcon size={32} />
        </button>
        <br />
        <button
          id="series"
          className={`${animatingButton === "series" ? "animate-pop" : ""}`}
          onClick={() => handleFocus("series")}
        >
          <TvMinimalPlayIcon size={32} />
        </button>
      </div>
      <div className="settings pb-2">
        <button
          id="settings"
          className={`${animatingButton === "settings" ? "animate-pop" : ""}`}
          onClick={() => handleFocus("settings")}
        >
          <SettingsIcon size={32} />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
