import { IconButton } from '../../../Buttons/components/IconButton';
import { arrowPath } from '@/shared/assets/icons/arrow-right';
import './ButtonTop.scss';

export const ButtonTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="back-to-top">
      <span className="back-to-top__text">Back to top</span>
      <IconButton
        className="back-to-top__button"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <img
          className="back-to-top__icon"
          src={arrowPath}
          
        />
      </IconButton>
    </div>
  );
};
