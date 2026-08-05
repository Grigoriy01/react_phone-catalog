import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Logo.scss';

type Props = {
  className: string;
}
export const Logo: React.FC<Props> = ({className}) => {
  return (
    <Link
    className={cn(`logo ${className || ''}`)}
    to="/ "
    >
      <img src="../public/img/logo/logo-light.svg" className="logo__img" alt="logo" />
    </Link>
  );
};
