export type MainListMenuItem = {
  listItems: SubListItemWithMenuType[] | undefined;
};

export type SubListItemWithMenuType = {
  text: string;
  iconData: React.ReactNode;
  isSelected: boolean;
  isSubList: boolean;
  subListItems: MainListMenuItem | null;
  onClickFunction: () => void;
};
