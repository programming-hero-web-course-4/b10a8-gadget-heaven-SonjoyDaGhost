

const Heading = ({title, twidth, subtitle, swidth}) => {
    return (
        <div>
            <h1 className={`text-3xl text-center font-bold mb-3 w-[${twidth}]`}>{title}</h1>
            <p className={` text-center w-[${swidth}]`}>{subtitle}</p>
        </div>
    );
};

export default Heading;