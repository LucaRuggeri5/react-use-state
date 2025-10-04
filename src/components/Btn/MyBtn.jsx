const MyBtn = (props) => {
    const { title, onToggle, isSelected } = props;

    return (
        <>
            <button type="button"
                className={`btn ${isSelected ? 'btn-warning' : 'btn-primary'}`}
                onClick={onToggle}
            >
                {title}
            </button>

        </>
    )
}

export default MyBtn