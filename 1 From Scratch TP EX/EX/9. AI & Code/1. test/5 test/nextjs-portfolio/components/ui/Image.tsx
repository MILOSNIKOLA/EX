import NextImage, { ImageProps } from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`image-wrapper ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        priority={priority}
        quality={90}
        loading={priority ? undefined : 'lazy'}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  )
}

