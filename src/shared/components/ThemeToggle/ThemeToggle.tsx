import React from 'react';
import cn from 'classnames';
import { useTheme } from '@/shared/context/ThemeContext';
import { IconButton } from '../Buttons/components/IconButton';

import { ThemeIcon } from '@/shared/assets/icons';

import './ThemeToggle.scss';

type Props = {
  className?: string;
  isLoading?: boolean;
  hasError?: boolean;
};

export const ThemeToggle: React.FC<Props> = ({
  className,
  isLoading,
  hasError,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    (!isLoading && !hasError) && (
      <IconButton
        type="button"
        className={cn('theme-toggle', className, {
          'theme-toggle--dark': isDark,
        })}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      >
        <ThemeIcon className="theme-toggle__icon" />
      </IconButton>
    )
  );
};
