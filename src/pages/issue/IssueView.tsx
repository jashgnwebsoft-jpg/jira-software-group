import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import CustomMenuButtonComponent from "../../components/CustomMenuButtonComponent";

import Search from "../../components/SearchComponent";
import { issueButtonTitle } from "../../data/TempData";
import ReactVirtualizedTable from "../../components/VirtualizationTable";


export default function IssueView() {
  return (
    <>
      <Box border="1px solid grey" borderRadius={2} p={4}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Projects
          </Link>
          <Link underline="hover" color="inherit" href="#">
            test bug tracking
          </Link>
        </Breadcrumbs>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h4">Issues</Typography>
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
            {/* <Search /> */}
            <CustomizedSearchComponent iconSide="end" border="1px solid rgba(0,0,0,0.15)" borderRadius="6px" />
           
            {issueButtonTitle.map((data) => (
              <CustomMenuButtonComponent
                hoverEffect={false}
                title={data}
                backgroundColorProps="grey.100"
                colorProps="grey.700"
                fontWeightProps="bold"
              />
            ))}
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
        <Box py={2}>
          <ReactVirtualizedTable />
        </Box>
      </Box>
    </>
  );
}
