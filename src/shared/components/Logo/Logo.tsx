import { Link } from 'react-router-dom';
import cn from 'classnames';
import logoIcon from '@/shared/assets/icons/logo/logo-light.svg'
import './Logo.scss';

type Props = {
  className?: string;
}
export const Logo: React.FC<Props> = ({className}) => {
  return (
    <Link
    className={cn(`logo ${className || ''}`)}
    to="/ "
    >
      <img src={logoIcon} className="logo__img" alt="logo" />
    </Link>
  );
};
