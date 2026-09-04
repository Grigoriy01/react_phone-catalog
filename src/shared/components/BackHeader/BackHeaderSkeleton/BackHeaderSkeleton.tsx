import './BackHeaderSkeleton.scss';

 export const BackHeaderSkeleton = () => {
  return (

     <div className="back-header-skeleton">
      <div className="back-header-skeleton__btn" />
      <div className="back-header-skeleton__title-group">
        <div className="back-header-skeleton__title back-header-skeleton__title--main" />
        <div className="back-header-skeleton__title back-header-skeleton__title--sub" />
      </div>
    </div>
  );
};
