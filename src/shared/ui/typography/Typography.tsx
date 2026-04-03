import styles from './Typography.module.scss';
import { type FC, type ReactNode, type JSX } from 'react';
import classNames from 'classnames';

export type ITVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyText'
  | 'bodyText2'
  | 'bodyText3'
  | 'smallText';

export type ITColors =
  | 'black'
  | 'secondary'
  | 'white'
  | 'grey01'
  | 'grey02'
  | 'grey03'
  | 'bg2'
  | 'primary';

export type ITWeights =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold';
export type ITAlign = 'center' | 'left' | 'right';
export type ITTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

export interface ITTypography {
  variant: ITVariants;
  color?: ITColors;
  weight?: ITWeights;
  align?: ITAlign;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  truncate?: number;
  style?: React.CSSProperties;
  transform?: ITTransform;
  link?: boolean;
}

export const Typography: FC<ITTypography> = (props) => {
  const {
    variant,
    color,
    weight,
    align = 'left',
    children,
    onClick,
    className,
    truncate,
    style,
    transform = 'none',
    link = false,
  } = props;

  const Tags: Record<ITVariants, keyof JSX.IntrinsicElements> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    bodyText: 'p',
    bodyText2: 'p',
    bodyText3: 'p',
    smallText: 'p',
  };

  const classNamedGenerated = classNames(
    styles[variant],
    color && styles[color],
    weight && styles[weight],
    styles[transform],
    styles[align],
    link && styles.link,
    className,
  );

  const TagName = Tags[variant];

  const truncateString = (str: ReactNode, maxNumber: number): ReactNode => {
    if (typeof str === 'string') {
      return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...';
    }
    return str;
  };

  return (
    <TagName onClick={onClick} className={classNamedGenerated} style={style}>
      {truncate ? truncateString(children, truncate) : children}
    </TagName>
  );
};
