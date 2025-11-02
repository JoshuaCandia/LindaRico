import ServicesPages from '../components/ServicesPages/ServicesPages'
import SEOHead from '../components/SEO/SEOHead'
import { siteConfig } from '../config/siteConfig'

const Services = ({ title, image, description, services }) => {
  return (
    <>
      <SEOHead
        title={`${title} | ${siteConfig.company.name}`}
        description={description}
      />
      <ServicesPages
        title={title}
        image={image}
        description={description}
        services={services}
      />
    </>
  )
}

export default Services
