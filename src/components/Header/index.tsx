import * as React from 'react';
import styles from './Header.css';

type HeaderProps = {
  title: string,
}

const Header = ({ title }: HeaderProps) => <h1 className={styles.header}>{title}</h1>;

export default React.memo(Header);
