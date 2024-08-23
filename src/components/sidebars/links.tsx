import { AiOutlineHome } from 'solid-icons/ai';
import { CgMore, CgProfile } from 'solid-icons/cg';
import { IoNotificationsCircleOutline } from 'solid-icons/io';
import { RiMapCompassDiscoverLine } from 'solid-icons/ri';

const SIZE = 24;

export const links = [
    {
        name: 'Home',
        icon: () => <AiOutlineHome size={SIZE} />,
        href: '/',
    },
    {
        name: 'Profile',
        icon: () => <CgProfile size={SIZE} />,
        href: '/profile',
    },
    {
        name: 'More',
        icon: () => <CgMore size={SIZE} />,
        href: '/more',
    },
    {
        name: 'Notification',
        icon: () => <IoNotificationsCircleOutline size={SIZE} />,
        href: '/notification',
    },
    {
        name: 'Discover',
        icon: () => <RiMapCompassDiscoverLine size={SIZE} />,
        href: '/discover',
    },
];