import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    children: React.ReactNode;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    fullWidth = false,
    className = '',
    children,
    href,
    ...props
}) => {
    const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${fullWidth ? styles.fullWidth : ''}
    ${className}
  `.trim();

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};
