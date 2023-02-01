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
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import {
  useState, MouseEvent, ReactElement, useEffect,
} from 'react';
import { useRouter } from 'next/router';

import SearchBar from '@/components/SearchBar';
import { MenuId } from '@/types/app-header';

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

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMainMenuOpen = Boolean(mainMenuAnchorEl);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  const isMobileProfileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMainMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleMainMenuClose = () => {
    setMainMenuAnchorEl(null);
  };

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

  const goToHome = () => {
    handleMainMenuClose();
    router.push('/');
  };

  const goToBorrow = () => {
    handleMainMenuClose();
    router.push('/borrow');
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

  const renderMainMenu = (
    <Menu
      id={MenuId.MAIN_MENU}
      anchorEl={mainMenuAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMainMenuOpen}
      onClose={handleMainMenuClose}
    >
      <MenuItem onClick={goToHome}>
        Tuition Calulator
      </MenuItem>
      <MenuItem onClick={goToBorrow}>
        Loan Calulator
      </MenuItem>
    </Menu>
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
                onClick={handleMainMenuOpen}
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
      {renderMainMenu}
      {renderProfileMenu}
    </>
  );
}
