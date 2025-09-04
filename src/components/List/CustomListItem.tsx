import {
  alpha,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState, type ReactNode } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export type ListProps = {
  text: string;
  isSubList: boolean;
  open: boolean;
  listItems: ListProps[] | null;
  iconData: ReactNode;
  isSelected: boolean;
};

export default function CustomListItem(props: ListProps) {
  const [openNestedList, setOpenNestedList] = useState(false);
  const handleNestedListClick = () => {
    console.log(props.listItems);
    setOpenNestedList(!openNestedList);
    allItemsClick(props.text);
  };
  const allItemsClick = (item: string) => {
    console.log(item);
  };
  const handleNotNestedList = () => {
    console.log("no nested list available");
    allItemsClick(props.text);
  };
  return (
    <>
      <ListItem
        key={props.text}
        disablePadding
        sx={{
          display: "block",
          height: 45,
          width: 275,
          color: props.isSelected ? "primary.main" : "#000000ff",
          borderRadius: 3,
          mx: 2,
          borderColor: "primary",
          borderLeft: props.isSelected ? "3px solid" : "",
          backgroundColor: alpha(
            props.isSelected ? "#72cff8" : "#ffffffff",
            0.3
          ),
          fontSize: 15,
          // backgroundColor: '#72cff8' ,
        }}
      >
        <ListItemButton
          onClick={
            props.isSubList ? handleNestedListClick : handleNotNestedList
          }
          sx={[
            {
              minHeight: 40,
              px: 2.3,
            },
            props.open
              ? {
                  justifyContent: "initial",
                }
              : {
                  justifyContent: "center",
                },
          ]}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: "center",
              },
              props.open
                ? {
                    mr: 3,
                  }
                : {
                    mr: "auto",
                  },
            ]}
          >
            {props.iconData}
          </ListItemIcon>
          <ListItemText
            primary={props.text}
            sx={[
              props.open
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  },
            ]}
          />
          {props.isSubList && (
            <ListItemIcon
              sx={[
                {
                  minWidth: 0,
                  justifyContent: "center",
                },
                props.open
                  ? {
                      mr: 3,
                    }
                  : {
                      mr: "auto",
                    },
              ]}
            >
              {openNestedList ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          )}
        </ListItemButton>
      </ListItem>
      {/* here i made the function recursive call */}
      {props.isSubList && openNestedList && (
        <Collapse in={openNestedList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.listItems?.map((item, index) => {
              console.log(item);
              return (
                <CustomListItem
                  key={index}
                  text={item.text}
                  isSubList={item.isSubList}
                  open={true}
                  listItems={item.listItems}
                  iconData={item.iconData}
                  isSelected={item.isSelected}
                />
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}
