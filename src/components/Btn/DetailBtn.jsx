const DetailsBtn = (props) => {
    const { info, isSelected } = props;
    return (
        <>
            <p className="container border ">
                {isSelected && info}
            </p>
        </>
    )

}

export default DetailsBtn