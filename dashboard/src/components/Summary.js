import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Chip
} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Summary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Sample data
  const portfolioValue = 152480.75;
  const investedValue = 145000.00;
  const todayPnL = 1250.50;
  const overallPnL = portfolioValue - investedValue;
  const overallPnLPercent = (overallPnL / investedValue) * 100;
  const todayPnLPercent = 0.83;

  const topGainers = [
    { name: "RELIANCE", change: "+2.3%", value: "+₹1,150.25" },
    { name: "INFY", change: "+1.8%", value: "+₹720.40" },
    { name: "HDFCBANK", change: "+1.2%", value: "+₹380.75" }
  ];

  const topLosers = [
    { name: "TATASTEEL", change: "-1.5%", value: "-₹450.30" },
    { name: "TCS", change: "-0.8%", value: "-₹280.60" },
    { name: "WIPRO", change: "-0.5%", value: "-₹120.25" }
  ];

  return (
    <Box sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        Portfolio Summary
      </Typography>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Portfolio Value
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹{portfolioValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Invested Value
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹{investedValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Today's P&L
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography 
                  variant="h6" 
                  color={todayPnL >= 0 ? "success.main" : "error.main"}
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                  {todayPnL >= 0 ? "+" : ""}₹{todayPnL.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                </Typography>
                <Chip 
                  size="small" 
                  label={`${todayPnL >= 0 ? "+" : ""}${todayPnLPercent.toFixed(2)}%`} 
                  color={todayPnL >= 0 ? "success" : "error"} 
                  icon={todayPnL >= 0 ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />} 
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Overall P&L
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography 
                  variant="h6" 
                  color={overallPnL >= 0 ? "success.main" : "error.main"}
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                  {overallPnL >= 0 ? "+" : ""}₹{overallPnL.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                </Typography>
                <Chip 
                  size="small" 
                  label={`${overallPnL >= 0 ? "+" : ""}${overallPnLPercent.toFixed(2)}%`} 
                  color={overallPnL >= 0 ? "success" : "error"} 
                  icon={overallPnL >= 0 ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />} 
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 1.5, sm: 2 }, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Top Gainers
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <List dense={isMobile}>
              {topGainers.map((stock, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={stock.name}
                    secondary={
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 0.5 }}>
                        <Chip 
                          size="small" 
                          label={stock.change} 
                          color="success" 
                          icon={<ArrowUpwardIcon fontSize="small" />} 
                          variant="outlined"
                        />
                        <Typography variant="body2" color="success.main">
                          {stock.value}
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 1.5, sm: 2 }, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Top Losers
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <List dense={isMobile}>
              {topLosers.map((stock, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={stock.name}
                    secondary={
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 0.5 }}>
                        <Chip 
                          size="small" 
                          label={stock.change} 
                          color="error" 
                          icon={<ArrowDownwardIcon fontSize="small" />} 
                          variant="outlined"
                        />
                        <Typography variant="body2" color="error.main">
                          {stock.value}
                        </Typography>
                      </Stack>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;

