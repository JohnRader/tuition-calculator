import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  SwipeableDrawer,
} from '@mui/material';
import { Home as HomeIcon, School as SchoolIcon, Calculate as CalculateIcon } from '@mui/icons-material';
import { Route } from '@/types';

const drawerList = (
  {
    toggleDrawer,
    goToRoute,
  }: {
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    goToRoute: (route: Route) => void
  },
) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <Typography variant="h5" padding="1rem">App Name</Typography>
    <Divider />
    <List>
      <ListItem key={Route.HOME} disablePadding>
        <ListItemButton onClick={() => goToRoute(Route.HOME)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem key={Route.TUITION_CALCULATOR} disablePadding>
        <ListItemButton onClick={() => goToRoute(Route.TUITION_CALCULATOR)}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Tuition Calculator" />
        </ListItemButton>
      </ListItem>
      <ListItem key={Route.LOAN_CALCULATOR} disablePadding>
        <ListItemButton onClick={() => goToRoute(Route.LOAN_CALCULATOR)}>
          <ListItemIcon>
            <CalculateIcon />
          </ListItemIcon>
          <ListItemText primary="Loan Calculator" />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);

export function renderDrawer(
  {
    drawerOpen,
    toggleDrawer,
    goToRoute,
  }: {
    drawerOpen: boolean;
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    goToRoute: (route: Route) => void
  },
) {
  return (
    <SwipeableDrawer
      sx={{ backgroundColor: 'rgb(var(--background-rbg))', color: 'whitesmoke' }}
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {drawerList({ toggleDrawer, goToRoute })}
    </SwipeableDrawer>
  );
}
