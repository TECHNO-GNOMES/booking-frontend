interface ButtonProps {
    title: string;
    style: string;
}

function Button({ title, style } : ButtonProps ) {
    return (
        <>
            <button className={style}>{title}</button>
        </>
    )
}

export default Button