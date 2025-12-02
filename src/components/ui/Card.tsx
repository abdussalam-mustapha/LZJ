import React from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
    goldTitle?: boolean;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', imageSrc, imageAlt, goldTitle = false }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {imageSrc && (
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title || 'Card image'}
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
            )}
            {title && <h3 className={`${styles.title} ${goldTitle ? styles.goldTitle : ''}`}>{title}</h3>}
            <div className={styles.description}>{children}</div>
        </div>
    );
};
