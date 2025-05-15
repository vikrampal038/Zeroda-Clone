import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Grid, Paper, Container, useMediaQuery, useTheme, Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "../context/GeneralContext";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const watchlistContent = (
    <GeneralContextProvider>
      <WatchList />
    </GeneralContextProvider>
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 2, px: { xs: 1, sm: 2, md: 3 } }}>
      {isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open watchlist"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {!isMobile && (
          <Grid item xs={12} md={4} lg={3}>
            <Paper 
              elevation={3} 
              sx={{ 
                height: { md: "calc(100vh - 100px)", lg: "calc(100vh - 100px)" }, 
                overflow: "auto" 
              }}
            >
              {watchlistContent}
            </Paper>
          </Grid>
        )}
        
        <Grid item xs={12} md={isMobile ? 12 : 8} lg={isMobile ? 12 : 9}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 1, sm: 2 }, 
              height: { xs: "auto", md: "calc(100vh - 100px)" }, 
              minHeight: { xs: "calc(100vh - 150px)", md: "auto" },
              overflow: "auto" 
            }}
          >
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
              <Route path="/apps" element={<Apps />} />
            </Routes>
          </Paper>
        </Grid>
      </Grid>

      {/* Mobile drawer for watchlist */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: { xs: '85%', sm: '50%' } 
          },
        }}
      >
        {watchlistContent}
      </Drawer>
    </Container>
  );
};

export default Dashboard;

