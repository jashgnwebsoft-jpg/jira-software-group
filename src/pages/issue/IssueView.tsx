import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import CustomMenuButtonComponent from "../../components/CustomMenuButtonComponent";
import CustomTable from "../../components/CustomTable";
import Search from "../../components/SearchComponent";

export default function IssueView() {
  return (
    <>
      <Card sx={{ paddingLeft: 3 }}>
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
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Expoert Issues"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
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
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Assignee"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Reporter"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Status"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Type"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
              <CustomMenuButtonComponent
                hoverEffect={false}
                title="Status Category"
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
            </Stack>

            <Button
              variant="contained"
              endIcon={<Menu />}
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
