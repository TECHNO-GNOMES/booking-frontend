import styles from './Button.module.scss'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'default' | 'baseline';
}

function Button({ children, onClick , variant='primary', size='default' } : ButtonProps ) {
    return (
        <>
            <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button