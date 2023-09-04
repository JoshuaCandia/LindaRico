import ServicesPages from "../components/servicesPages/ServicesPages"

const Services = ({title, image, description, services}) => {


    return (
        <ServicesPages title={title} image={image} description={description} services={services}/>
    )
};

export default Services;
