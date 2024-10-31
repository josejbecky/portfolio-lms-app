import { 
  Stack,
  ThemeProvider,
  Typography
} from "@mui/material";

import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        spacing="16px"
      >
        <Typography>Hello, world!</Typography>
        <Typography>안녕, 세계!</Typography>
        <Typography>"Icons8 Icons" http://icons8.com/icons</Typography>
      </Stack>
    </ThemeProvider>
  );
}
