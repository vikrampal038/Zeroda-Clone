import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useMediaQuery,
  useTheme,
  Stack
} from "@mui/material";

// Sample app data
const appList = [
  {
    id: 1,
    name: "Option Chain",
    description: "Analyze option chains with real-time data",
    image: "https://via.placeholder.com/150",
    installed: true
  },
  {
    id: 2,
    name: "Technical Scanner",
    description: "Scan stocks based on technical indicators",
    image: "https://via.placeholder.com/150",
    installed: true
  },
  {
    id: 3,
    name: "Fundamental Screener",
    description: "Screen stocks based on fundamental metrics",
    image: "https://via.placeholder.com/150",
    installed: false
  },
  {
    id: 4,
    name: "Strategy Builder",
    description: "Build and backtest trading strategies",
    image: "https://via.placeholder.com/150",
    installed: false
  },
  {
    id: 5,
    name: "Market Heatmap",
    description: "Visual representation of market movements",
    image: "https://via.placeholder.com/150",
    installed: true
  },
  {
    id: 6,
    name: "News Analyzer",
    description: "Get market news with sentiment analysis",
    image: "https://via.placeholder.com/150",
    installed: false
  }
];

const Apps = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        Apps Marketplace
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
        Enhance your trading experience with these powerful apps
      </Typography>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {appList.map((app) => (
          <Grid item xs={12} sm={6} md={4} key={app.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height={isMobile ? "120" : "140"}
                image={app.image}
                alt={app.name}
              />
              <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                  {app.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {app.description}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  {app.installed ? (
                    <Button size="small" variant="contained" color="primary">
                      Open
                    </Button>
                  ) : (
                    <Button size="small" variant="outlined">
                      Install
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Apps;

