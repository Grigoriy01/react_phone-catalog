import { Link } from 'react-router-dom';
import './NotFoundPage.scss'
import { PageNotFoundImg } from '@/shared/assets/error-img';

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <PageNotFoundImg className="not-found-page__img" aria-hidden='true'/>
      <h1 className="not-found-page__title visually-hidden ">Not found page</h1>
      <Link to="/" className="not-found-page__button">
        Go to Home
      </Link>

    </div>
  );
};
