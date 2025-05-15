import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Grid
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Sample data
const samplePositions = [
  { 
    symbol: "NIFTY 23JUN 19500 CE", 
    type: "BUY", 
    quantity: 50, 
    avgPrice: 85.25, 
    ltp: 92.50, 
    pnl: 362.50, 
    pnlPercent: 8.5 
  },
  { 
    symbol: "BANKNIFTY 23JUN 44000 PE", 
    type: "SELL", 
    quantity: 25, 
    avgPrice: 120.75, 
    ltp: 110.25, 
    pnl: 262.50, 
    pnlPercent: 8.7 
  },
  { 
    symbol: "RELIANCE 23JUN 2500 CE", 
    type: "BUY", 
    quantity: 10, 
    avgPrice: 35.50, 
    ltp: 32.75, 
    pnl: -27.50, 
    pnlPercent: -7.7 
  }
];

const Positions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getTypeColor = (type) => {
    return type === "BUY" ? "primary" : "error";
  };

  return (
    <Box sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        Positions ({samplePositions.length})
      </Typography>

      {/* Desktop view - Table */}
      {!isMobile && (
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table size="small" aria-label="positions table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Avg. Price</TableCell>
                <TableCell>LTP</TableCell>
                <TableCell>P&L</TableCell>
                <TableCell>Change %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {samplePositions.map((position, index) => (
                <TableRow key={index}>
                  <TableCell>{position.symbol}</TableCell>
                  <TableCell>
                    <Chip 
                      label={position.type} 
                      color={getTypeColor(position.type)} 
                      size="small" 
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{position.quantity}</TableCell>
                  <TableCell>{position.avgPrice.toFixed(2)}</TableCell>
                  <TableCell>{position.ltp.toFixed(2)}</TableCell>
                  <TableCell sx={{ color: position.pnl >= 0 ? "success.main" : "error.main" }}>
                    {position.pnl >= 0 ? "+" : ""}{position.pnl.toFixed(2)}
                  </TableCell>
                  <TableCell sx={{ color: position.pnlPercent >= 0 ? "success.main" : "error.main" }}>
                    {position.pnlPercent >= 0 ? "+" : ""}{position.pnlPercent.toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Mobile view - Accordions */}
      {isMobile && (
        <Box sx={{ mb: 3 }}>
          {samplePositions.map((position, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', pr: 2 }}>
                  <Typography sx={{ fontWeight: 'medium', fontSize: '0.9rem' }}>{position.symbol}</Typography>
                  <Typography 
                    sx={{ 
                      color: position.pnl >= 0 ? "success.main" : "error.main",
                      fontWeight: 'medium'
                    }}
                  >
                    {position.pnl >= 0 ? "+" : ""}{position.pnl.toFixed(2)}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Type</Typography>
                    <Chip 
                      label={position.type} 
                      color={getTypeColor(position.type)} 
                      size="small" 
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Quantity</Typography>
                    <Typography variant="body1">{position.quantity}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Avg. Price</Typography>
                    <Typography variant="body1">{position.avgPrice.toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">LTP</Typography>
                    <Typography variant="body1">{position.ltp.toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">P&L</Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ color: position.pnl >= 0 ? "success.main" : "error.main" }}
                    >
                      {position.pnl >= 0 ? "+" : ""}{position.pnl.toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Change %</Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ color: position.pnlPercent >= 0 ? "success.main" : "error.main" }}
                    >
                      {position.pnlPercent >= 0 ? "+" : ""}{position.pnlPercent.toFixed(2)}%
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}

      {/* Summary Cards */}
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">Total P&L</Typography>
            <Typography variant="h6" color="success.main">+₹597.50</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">Day's P&L</Typography>
            <Typography variant="h6" color="success.main">+₹325.75</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="body2" color="text.secondary">Margin Used</Typography>
            <Typography variant="h6">₹15,250.00</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Positions;

