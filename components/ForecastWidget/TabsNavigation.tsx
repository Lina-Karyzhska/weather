import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import { TabsNames } from '../../types';

const useStyles = makeStyles({
  root: {
    borderRadius: '0 0 15px 15px',
    backgroundColor: '#FFFFFF70',
    marginTop: 10,

    '& .MuiBottomNavigationAction-root': {
      maxWidth: 'unset',
    },
  },
});

interface ITabsNavigationProps {
  changeTab: React.Dispatch<React.SetStateAction<TabsNames>>,
  label: TabsNames,
}

const TabsNavigation: React.FC<ITabsNavigationProps> = ({ label, changeTab }) => {
  const style = useStyles();

  const handleChange = (event: ChangeEvent, newValue: TabsNames) => {
    changeTab(newValue);
  };

  return (
    <BottomNavigation value={label} onChange={handleChange} showLabels className={style.root}>
      <BottomNavigationAction label={TabsNames.FIRST} value={TabsNames.FIRST} />
      <BottomNavigationAction label={TabsNames.SECOND} value={TabsNames.SECOND} />
      <BottomNavigationAction label={TabsNames.THIRD} value={TabsNames.THIRD} />
    </BottomNavigation>
  );
}

export default TabsNavigation;
