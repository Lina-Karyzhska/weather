import { Drawer, makeStyles } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',

    padding: 20,
    fontSize: '2rem',
  },
});

interface IMenuDrawerProps {
  open: boolean;
  handleClose: () => void;
  anchor: 'left' | 'top' | 'right' | 'bottom';
}

const MenuDrawer: React.FC<IMenuDrawerProps> = ({ open, handleClose, anchor }) => {
  const style = useStyles();
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={handleClose}
      className={`drawer_${anchor}`}
      classes={{ paper: style.paper }}
    >
      <Link href="/">
        <button className="menu__item" onClick={handleClose}>
          Weather forecast
        </button>
      </Link>

      <Link href="/maps">
        <button className="menu__item" onClick={handleClose}>
          Weather maps
        </button>
      </Link>

      <Link href="/air-pollution">
        <button className="menu__item" onClick={handleClose}>
          Air pollution
        </button>
      </Link>
    </Drawer>
  );
}

export default MenuDrawer; 
