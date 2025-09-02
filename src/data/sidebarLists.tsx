import { Icon } from "@iconify/react/dist/iconify.js";
import type {
  MainListMenuItem,
  SubListItemWithMenuType,
} from "../../components/SubListItemWithMenuOptions";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import type { ListProps } from "../../components/CustomListItem";
import MailIcon from "@mui/icons-material/Mail";

export const projectSubList: ListProps[] = [
    {
      text: "demo-project",
      iconData: <MailIcon />,
      isSelected: false,
      isSubList: false,
      listItems: null,
      open: true,
    },
  ];
export const starredSubList: ListProps[] = [
    {
      text: "starred-1",
      iconData: <MailIcon />,
      isSelected: false,
      isSubList: false,
      listItems: null,
      open: true,
    },
    {
      text: "starred-2",
      iconData: <MailIcon />,
      isSelected: false,
      isSubList: false,
      listItems: null,
      open: true,
    },
  ];
export const recentsSubList: ListProps[] = [
    {
      text: "recents-1",
      iconData: <MailIcon />,
      isSelected: false,
      isSubList: false,
      listItems: null,
      open: true,
    },
    {
      text: "recents-2",
      iconData: <MailIcon />,
      isSelected: false,
      isSubList: false,
      listItems: null,
      open: true,
    },
  ];
export const starredSubMenuListItems: SubListItemWithMenuType[] = [
  {
    text: "Add People",
    iconData: <PermIdentityOutlinedIcon />,
    isSelected: false,
    isSubList: false,
    subListItems: null,
    onClickFunction: () => {
      console.log("add people");
    },
  },
];
export const mainStarredSubList: MainListMenuItem = {
  listItems: starredSubMenuListItems,
};

export const menuSublistItems: SubListItemWithMenuType[] = [
  {
    text: "Add to Starred",
    iconData: <Icon icon="solar:star-linear" width="25" height="25" />,
    isSelected: false,
    isSubList: true,
    subListItems: mainStarredSubList,
    onClickFunction: () => {
      console.log("Add to Starred");
    },
  },
  {
    text: "Add People",
    iconData: <Icon icon="icon-park-outline:people" width="25" height="25" />,
    isSelected: false,
    isSubList: false,
    subListItems: null,
    onClickFunction: () => {
      console.log("Add People");
    },
  },
  {
    text: "Project Settings",
    iconData: <Icon icon="fluent:settings-48-regular" width="25" height="25" />,
    isSelected: false,
    isSubList: false,
    subListItems: null,
    onClickFunction: () => {
      console.log("Project Settings");
    },
  },
  {
    text: "Archieve Project",
    iconData: <Icon icon="lucide:archive" width="25" height="25" />,
    isSelected: false,
    isSubList: false,
    subListItems: null,
    onClickFunction: () => {
      console.log("Archieve Project");
    },
  },
  {
    text: "Delete Project",
    iconData: <DeleteOutlineOutlinedIcon />,
    isSelected: false,
    isSubList: false,
    subListItems: null,
    onClickFunction: () => {
      console.log("Deleted Project");
    },
  },
];
