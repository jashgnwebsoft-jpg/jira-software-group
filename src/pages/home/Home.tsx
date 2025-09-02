import { Grid } from "@mui/material";
// import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/table/Datatable";

export default function Home() {
  return (
    <>
      <Grid container direction="column" spacing={8}>
        {/* <Grid>
          <Navbar />
        </Grid> */}

        <Grid>
          <DataTable />
        </Grid>
      </Grid>
    </>
  );
}
