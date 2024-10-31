import { 
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Pretendard",
      body1: {
        fontSize: "16px",  
        fontWeight: 100,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Pretendard",
            fontWeight: 350,
          },
        },
      }
    },
  });

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
