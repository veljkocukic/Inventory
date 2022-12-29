import { userIcon } from './../icons/userIcons';
import { favoritesIcon } from '../icons/favoritesIcon';
import { settingsIcon } from '../icons/settingsIcons';
import { folderIcons } from './../icons/folderIcon';
import { suitCaseIcon } from './../icons/suitCaseIcon';

export const routeLinks = [
  {
    id: 1,
    title: 'Контролна табла',
    path: '/',
    icon: suitCaseIcon,
  },
  {
    id: 2,
    title: 'Површине',
    path: '/groups',
    icon: folderIcons,
  },
  {
    id: 3,
    title: 'Машине',
    path: '/favorites',
    icon: favoritesIcon,
  },
  {
    id: 4,
    title: 'Инвентар',
    path: '/settings',
    icon: settingsIcon,
  },
  {
    id: 5,
    title: 'Индекс усева',
    path: '/settings',
    icon: settingsIcon,
  },
];

export const settingsRoutes = [
  {
    id: 1,
    title: 'User',
    path: '/settings',
    icon: userIcon,
  },
];
