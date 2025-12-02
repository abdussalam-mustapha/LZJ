import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 className={styles.goldHeading}>LZJ_ESOL’N</h3>
                    <p>
                        Building the backbone of smarter, more adaptive businesses across Africa.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <div className={styles.links}>
                        <Link href="#about" className={styles.link}>About Us</Link>
                        <Link href="#services" className={styles.link}>Services</Link>
                        <Link href="#contact" className={styles.link}>Contact</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <div className={styles.links}>
                        <a href="mailto:info@lzjesoln.com" className={styles.link}>info@lzjesoln.com</a>
                        <p>Abuja, Nigeria</p>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} LZJ_ESOL’N. All rights reserved.
            </div>
        </footer>
    );
};
