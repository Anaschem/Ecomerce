const Card = ({ title, description }) => {
    return (

        <div className="w=[200px] h-[200px] shadow-md bg-white">
            <h1> {title} </h1>
            {description&&(
            <div className="bg-slate-600 w-[300px] h-[200px]">
                <p> {description} </p>
            </div>
            )}
        </div>
    )
}

export default Card
