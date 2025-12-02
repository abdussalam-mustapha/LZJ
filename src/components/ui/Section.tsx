import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    variant?: 'default' | 'light' | 'gold';
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({
    variant = 'default',
    children,
    className = '',
    id,
}) => {
    const sectionClass = `
    ${styles.section}
    ${variant === 'light' ? styles.light : ''}
    ${variant === 'gold' ? styles.gold : ''}
    ${className}
  `.trim();

    return (
        <section id={id} className={sectionClass}>
            <div className={styles.container}>{children}</div>
        </section>
    );
};
