import { favoritesIcon } from '../icons/favoritesIcon';
import { settingsIcon } from '../icons/settingsIcons';
import { folderIcons } from './../icons/folderIcon';
import { suitCaseIcon } from './../icons/suitCaseIcon';

export const routeLinks = [
    {
        id:1,
        title:'Dashboard',
        path:'/',
        icon:suitCaseIcon
    },
    {
        id:2,
        title:'Folder',
        path:'/folder-marketing',
        list: [
            { name: 'Marketing', path: '/folder-marketing' },
            { name: 'Design', path: '/folder-design' },
            { name: 'Logic', path: '/folder-logic' },
          ],
        icon:folderIcons
    },
    {
        id:3,
        title:'Favorites',
        path:'/favorites',
        icon:favoritesIcon
    },
    {
        id:4,
        title:'Settings',
        path:'/settings',
        icon:settingsIcon
    },
]