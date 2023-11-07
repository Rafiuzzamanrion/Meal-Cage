

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mt-16 mb-10">
            <p className="text-yellow-500 mb-2"> {subHeading} </p>
            <h3 className="text-4xl text-success uppercase border-y-4  py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;