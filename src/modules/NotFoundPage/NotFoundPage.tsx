import { Link } from 'react-router-dom';
import './NotFoundPage.scss'

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img className="not-found-page__img" src="/img/page-not-found.png" alt="Page is not found" />
      <h1 className="not-found-page__title">Not found page</h1>
      <Link to="/" className="not-found-page__button">
        Go to Home
      </Link>

    </div>
  );
};
