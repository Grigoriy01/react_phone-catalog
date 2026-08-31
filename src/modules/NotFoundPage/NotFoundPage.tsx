import { Link } from 'react-router-dom';
import notPageImg from '@/shared/assets/error-img/page-not-found.png'
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img className="not-found-page__img" src={notPageImg} alt="Page is not found" />
      <h1 className="not-found-page__title">Not found page</h1>
      <Link to="/" className="not-found-page__button">
        Go to Home
      </Link>

    </div>
  );
};
