import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Link from 'next/link';
import styles from './styles/MapMenu.module.css';

const LINKS = ['temp', 'clouds', 'precipitation', 'pressure', 'wind'];

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#008bfa',

    '&:hover': {
      backgroundColor: '#0437c6',
    },
  },
});

interface IMapsMenuProps {}

const MapsMenu:React.FC<IMapsMenuProps> = () => {
  const style = useStyles();
  
  return (
    <ul className={styles.mapMenu}>
      {LINKS.map((link) => (
        <li key={link} className={styles.mapMenu__item}>
          <Link href="/maps/[mapType]" as={`/maps/${link}`}>
            <Button
              classes={{ root: style.root }}
              className={style.root}
              variant="contained"
              color="primary"
            >
              {link === 'temp' ? 'Temperature' : link}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MapsMenu;
