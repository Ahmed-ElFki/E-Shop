import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export const SidebarDataTop = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon sx={{ fontSize: 30, mb: "15px", color: "white" }} />,
    access: "all",
  },
  {
    name: "Cart",
    link: "/cart",
    icon: (
      <ShoppingCartIcon sx={{ fontSize: 30, mb: "15px", color: "white" }} />
    ),
    access: "all",
  },
  {
    name: "Users",
    link: "/users",
    icon: <PeopleAltIcon sx={{ fontSize: 30, mb: "15px", color: "white" }} />,
    access: "Moderator",
  },
  {
    name: "Profile",
    link: "/profile",
    icon: <PersonPinIcon sx={{ fontSize: 30, mb: "15px", color: "white" }} />,
    access: "all",
  },
];

export const SidebarDataBottom = [
  {
    name: "Logout",
    link: "/",
    icon: (
      <PowerSettingsNewIcon sx={{ fontSize: 30, mb: "15px", color: "white" }} />
    ),
    access: "all",
  },
];
