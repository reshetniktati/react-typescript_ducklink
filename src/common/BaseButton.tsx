type ButtonProps = {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, 
}

function BaseButton ({children, onClick}: ButtonProps) {
    return (
    <button className="btn" onClick={(e) => onClick(e)}>
        {children}
    </button>
    )
}

export default BaseButton