import { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';

if (process.browser) {
  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new LazyLoad();
  }
}

const LazyImage = (props) => {
  const { alt, src, srcset, sizes, width, height } = props;
  useEffect(() => {
    document.lazyLoadInstance.update();
  }, [alt, src, srcset, sizes, width, height]);

  return (
    <img
      className='lazy'
      alt={alt}
      data-srcset={srcset}
      data-src={src}
      data-sizes={sizes}
      height={height}
      width={width}
    />
  );
};

export default LazyImage;
