import { Stack, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      direction="row"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="inherit" />
    </Stack>
  );
};

export default Loader;
