import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import CustomizedMenus from "../components/CustomizedMenus";
import Search from "../components/Search";
import { Menu } from "@mui/icons-material";
import CustomTable from "../components/CustomTable";

export default function ProjectList() {
  return (
    <>
      <Card sx={{paddingLeft:3}}>
        <CardContent sx={{ p: 3, width: "95%" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
              Projects
            </Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
              test bug tracking
            </Typography>
          </Breadcrumbs>
          {/* Issue Stack */}

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h4" fontSize={"35px"} fontWeight={"bold"}>
              Issues
            </Typography>
            <Stack gap={1} direction={"row"}>
              <CustomizedMenus name="Expoert Issues" />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "grey.100",
                  color: "grey.700",
                  fontWeight: "bold",
                }}
              >
                Go to advance search
              </Button>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={3}
          >
            <Stack direction={"row"} gap={1}>
              <Search />
              <CustomizedMenus name="Assignee" />
              <CustomizedMenus name="Reporter" />
              <CustomizedMenus name="Status" />
              <CustomizedMenus name="Type" />
              <CustomizedMenus name="Status Category" />
            </Stack>

            <Button
              variant="contained"
              endIcon={<Menu />}
              // sx={{
              //   backgroundColor: "grey.100",
              //   color: "grey.700",
              //   fontWeight: "bold",
              // }}
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[100],
                color: theme.palette.grey[700],
                fontWeight: theme.typography.fontWeightBold,
              })}
            >
              Switch to detail view
            </Button>
          </Stack>

          {/* Table */}

          <CustomTable />
        </CardContent>
      </Card>
    </>
  );
}
