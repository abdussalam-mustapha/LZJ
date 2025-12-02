import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    LZJ<span className={styles.logoAccent}>_ESOL’N</span>
                </Link>

                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About Us</Link>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <Button variant="primary" href="#contact">
                        Get Started
                    </Button>
                </div>

                <button className={styles.mobileMenuButton} aria-label="Menu">
                    ☰
                </button>
            </div>
        </nav>
    );
};
