import './ButtonTop.scss';

export const ButtonTop = () => {

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  return (
    <div className="footer__back-to-top">
      <span className="footer__back-to-top-text">Back to top</span>
      <button
        type="button"
        className="footer__back-to-top-button"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <img
          className="footer__back-to-top-icon"
          src="/public/img/icons/Buttons/Icons/arrow-top.svg"
          alt="button back to top"
        />
      </button>
    </div>
  );
};
