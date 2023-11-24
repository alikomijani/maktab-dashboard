import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
export const drawerWidth = 280;

export const MenuItems = [
  {
    id: 1,
    label: "Dashboard",
    Icon: SignalCellularAltIcon,
    to: "/dashboard",
  },
  {
    id: 2,
    label: "Customers",
    Icon: PeopleIcon,
    to: "/dashboard/customers",
  },
  {
    id: 3,
    label: "Products",
    Icon: ShoppingBagIcon,
    to: "/dashboard/products",
  },
  {
    id: 4,
    label: "Account",
    Icon: PersonIcon,
    to: "/dashboard/account",
  },
];
