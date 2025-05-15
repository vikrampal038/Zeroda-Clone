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
const sampleOrders = [
  { 
    symbol: "NIFTY 23JUN 19500 CE", 
    type: "BUY", 
    quantity: 50, 
    price: 85.25, 
    status: "COMPLETE", 
    orderTime: "10:15:30",
    orderType: "LIMIT"
  },
  { 
    symbol: "BANKNIFTY 23JUN 44000 PE", 
    type: "SELL", 
    quantity: 25, 
    price: 120.75, 
    status: "PENDING", 
    orderTime: "11:20:45",
    orderType: "MARKET"
  },
  { 
    symbol: "RELIANCE 23JUN 2500 CE", 
    type: "BUY", 
    quantity: 10, 
    price: 35.50, 
    status: "REJECTED", 
    orderTime: "09:45:15",
    orderType: "LIMIT"
  }
];

const Orders = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const getTypeColor = (type) => {
    return type === "BUY" ? "primary" : "error";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETE":
        return "success";
      case "PENDING":
        return "warning";
      case "REJECTED":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Box sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        Orders ({sampleOrders.length})
      </Typography>

      {/* Desktop view - Table */}
      {!isMobile && (
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table size="small" aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Order Type</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sampleOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.symbol}</TableCell>
                  <TableCell>
                    <Chip 
                      label={order.type} 
                      color={getTypeColor(order.type)} 
                      size="small" 
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>{order.price.toFixed(2)}</TableCell>
                  <TableCell>{order.orderType}</TableCell>
                  <TableCell>{order.orderTime}</TableCell>
                  <TableCell>
                    <Chip 
                      label={order.status} 
                      color={getStatusColor(order.status)} 
                      size="small"
                    />
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
          {sampleOrders.map((order, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', pr: 2 }}>
                  <Typography sx={{ fontWeight: 'medium', fontSize: '0.9rem' }}>{order.symbol}</Typography>
                  <Chip 
                    label={order.status} 
                    color={getStatusColor(order.status)} 
                    size="small"
                  />
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Type</Typography>
                    <Chip 
                      label={order.type} 
                      color={getTypeColor(order.type)} 
                      size="small" 
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Quantity</Typography>
                    <Typography variant="body1">{order.quantity}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Price</Typography>
                    <Typography variant="body1">{order.price.toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Order Type</Typography>
                    <Typography variant="body1">{order.orderType}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Time</Typography>
                    <Typography variant="body1">{order.orderTime}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">Status</Typography>
                    <Chip 
                      label={order.status} 
                      color={getStatusColor(order.status)} 
                      size="small"
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Orders;


