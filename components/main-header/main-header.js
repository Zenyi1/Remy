
import classes from './main-header.module.css';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

import logoImg from '@/assets/logo.png';

import Link from 'next/link';
import Image from 'next/image';



export default function MainHeader() {


    return (
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="LA plate with food" priority />
                Remy
            </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Browse meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
        </>
    );
}