import { IconButton } from '../../../Button/components/IconButton';
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
          src="/public/img/icons/Buttons/Icons/arrow-top.svg"
          alt="button back to top"
        />
      </IconButton>
    </div>
  );
};
