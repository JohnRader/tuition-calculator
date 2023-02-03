import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Badge,
  Box,
  Menu,
  MenuItem,
  Slide,
  useScrollTrigger,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  Calculate as CalculateIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
import {
  useState, MouseEvent, ReactElement, useEffect,
} from 'react';
import { useRouter } from 'next/router';

import SearchBar from '@/components/SearchBar';
import { MenuId } from '@/types/app-header';
import { Route } from '@/types';

function HideOnScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function AppHeader() {
  const [windowAfterSSR, setWindowAfterSSR] = useState<Window & typeof globalThis>();

  useEffect(() => {
    setWindowAfterSSR(window);
  }, []);

  const router = useRouter();

  const [drawerOpen, setdrawerOpen] = useState<boolean>(false);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  const isMobileProfileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileProfileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderProfileMenu = (
    <Menu
      id={MenuId.PROFILE_MENU}
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileProfileMenu = (
    <Menu
      id={MenuId.MOBILE_PROFILE_MENU}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileProfileMenuOpen}
      onClose={handleMobileProfileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show new mail" color="inherit">
          <Badge badgeContent={0} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
      && event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setdrawerOpen(open);
  };

  const goToRoute = (route: Route) => {
    toggleDrawer(false);
    router.push(route);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h5" padding="1rem">Tuition Calculator</Typography>
      <Divider />
      <List>
        <ListItem key={Route.HOME} disablePadding>
          <ListItemButton onClick={() => goToRoute(Route.HOME)}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
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

  const renderDrawer = (
    <SwipeableDrawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {drawerList()}
    </SwipeableDrawer>
  );

  return (
    <>
      {!!windowAfterSSR && (
      <HideOnScroll>
        <AppBar sx={{ height: 'var(--app-header-height)' }} position="fixed">
          <Container maxWidth="lg">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <SearchBar />

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={0} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account"
                  aria-controls={MenuId.PROFILE_MENU}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={MenuId.MOBILE_PROFILE_MENU}
                  aria-haspopup="true"
                  onClick={handleMobileProfileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      )}
      {renderMobileProfileMenu}
      {renderDrawer}
      {renderProfileMenu}
    </>
  );
}
