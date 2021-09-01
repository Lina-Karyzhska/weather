import React, { useState } from 'react';
import MenuButton from './MenuButton';
import MenuDrawer from './MenuDrawer';

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuButton handleOpen={handleOpen} />
      <MenuDrawer open={open} handleClose={handleClose} anchor="top" />
      <MenuDrawer open={open} handleClose={handleClose} anchor="left" />
    </>
  );
}

export default Navigation;
