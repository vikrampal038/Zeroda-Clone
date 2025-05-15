import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Stack,
  useMediaQuery,
  useTheme
} from "@mui/material";

const Funds = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: { xs: 0.5, sm: 1, md: 2 } }}>
      <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        Funds
      </Typography>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Available Balance
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹25,750.35
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Used Margin
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹15,250.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Available Margin
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹10,500.35
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Total Deposits
              </Typography>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                ₹50,000.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 1.5, sm: 2 }, height: '100%' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                Recent Transactions
              </Typography>
              <Button size="small" variant="outlined">View All</Button>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            
            <List dense={isMobile}>
              <ListItem>
                <ListItemText
                  primary="Deposit"
                  secondary="Jun 15, 2023"
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                <Typography variant="body2" color="success.main">+₹10,000.00</Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Withdrawal"
                  secondary="Jun 10, 2023"
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                <Typography variant="body2" color="error.main">-₹5,000.00</Typography>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText
                  primary="Deposit"
                  secondary="Jun 5, 2023"
                  primaryTypographyProps={{ fontWeight: 'medium' }}
                />
                <Typography variant="body2" color="success.main">+₹15,000.00</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: { xs: 1.5, sm: 2 }, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Add Funds
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    p: 1.5, 
                    justifyContent: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  ₹5,000
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    p: 1.5, 
                    justifyContent: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  ₹10,000
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    p: 1.5, 
                    justifyContent: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  ₹25,000
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  sx={{ 
                    p: 1.5, 
                    justifyContent: 'center',
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  ₹50,000
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    mt: 1,
                    p: 1.5,
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  Add Custom Amount
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Funds;

