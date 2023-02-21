import {
  AppBar, Container, Toolbar, IconButton, Box, Slide, useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState, ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';

import { renderDrawer } from './HeaderDrawer';
import { Route } from '@/utils';

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
  const [drawerOpen, setdrawerOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setWindowAfterSSR(window);
  }, []);

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

  return (
    <>
      {!!windowAfterSSR && (
      <HideOnScroll>
        <AppBar sx={{ height: 'var(--app-header-height)', backgroundColor: 'rgb(var(--background-rgb))' }} position="fixed">
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

              <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      )}
      {renderDrawer({ drawerOpen, toggleDrawer, goToRoute })}
    </>
  );
}
