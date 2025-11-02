/**
 * Utilidades para optimización de performance
 */

/**
 * Debounce function - retrasa la ejecución de una función
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function}
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function - limita la frecuencia de ejecución
 * @param {Function} func - Función a ejecutar
 * @param {number} limit - Límite de tiempo en ms
 * @returns {Function}
 */
export function throttle(func, limit = 300) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Lazy load images - carga diferida de imágenes
 * Usar el componente LazyImage en su lugar
 */
export function setupLazyLoading() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser soporta loading="lazy"
    const images = document.querySelectorAll('img[data-src]')
    images.forEach((img) => {
      img.src = img.dataset.src
    })
  } else {
    // Fallback para navegadores antiguos
    const script = document.createElement('script')
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
    document.body.appendChild(script)
  }
}

/**
 * Preload critical assets
 * @param {Array<string>} urls - URLs de recursos a precargar
 */
export function preloadAssets(urls) {
  urls.forEach((url) => {
    const link = document.createElement('link')
    link.rel = 'preload'

    // Determinar el tipo de recurso
    if (url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      link.as = 'image'
    } else if (url.match(/\.(woff|woff2|ttf|otf)$/i)) {
      link.as = 'font'
      link.crossOrigin = 'anonymous'
    } else if (url.match(/\.css$/i)) {
      link.as = 'style'
    } else if (url.match(/\.js$/i)) {
      link.as = 'script'
    }

    link.href = url
    document.head.appendChild(link)
  })
}

/**
 * Reduce el tamaño de una imagen manteniendo la calidad
 * @param {File} file - Archivo de imagen
 * @param {number} maxWidth - Ancho máximo
 * @param {number} maxHeight - Alto máximo
 * @returns {Promise<Blob>}
 */
export function compressImage(file, maxWidth = 1920, maxHeight = 1080) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      const img = new Image()
      img.src = event.target.result
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height

        // Calcular nuevas dimensiones
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          (blob) => {
            resolve(blob)
          },
          file.type,
          0.85,
        ) // 85% quality
      }
      img.onerror = reject
    }
    reader.onerror = reject
  })
}

