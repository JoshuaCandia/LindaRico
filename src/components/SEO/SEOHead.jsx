import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { siteConfig } from '../../config/siteConfig'

/**
 * Componente para manejar SEO meta tags de forma dinámica
 * @param {string} title - Título de la página
 * @param {string} description - Descripción para meta tag
 * @param {string} keywords - Keywords separadas por comas
 * @param {string} ogImage - URL de imagen para Open Graph
 */
const SEOHead = ({ title, description, keywords, ogImage }) => {
  useEffect(() => {
    // Actualizar título
    document.title = title || siteConfig.seo.home.title

    // Actualizar meta description
    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      createMetaTag('name', 'description')
    metaDescription.setAttribute(
      'content',
      description || siteConfig.seo.home.description,
    )

    // Actualizar meta keywords
    if (keywords) {
      const metaKeywords =
        document.querySelector('meta[name="keywords"]') ||
        createMetaTag('name', 'keywords')
      metaKeywords.setAttribute('content', keywords)
    }

    // Open Graph tags
    updateOGTag('og:title', title || siteConfig.company.name)
    updateOGTag(
      'og:description',
      description || siteConfig.seo.home.description,
    )
    updateOGTag('og:type', 'website')
    if (ogImage) {
      updateOGTag('og:image', ogImage)
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title || siteConfig.company.name)
    updateMetaTag(
      'twitter:description',
      description || siteConfig.seo.home.description,
    )
  }, [title, description, keywords, ogImage])

  return null
}

// Helper function to create meta tag
function createMetaTag(attribute, value) {
  const meta = document.createElement('meta')
  meta.setAttribute(attribute, value)
  document.head.appendChild(meta)
  return meta
}

// Helper to update or create meta tag
function updateMetaTag(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = createMetaTag('name', name)
  }
  meta.setAttribute('content', content)
}

// Helper to update or create OG tag
function updateOGTag(property, content) {
  let meta = document.querySelector(`meta[property="${property}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
}

export default SEOHead

