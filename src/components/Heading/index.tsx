import * as React from 'react';
import styles from './Heading.css';

type HeadingProps = {
  title: string,
}

const Heading = ({ title }: HeadingProps) => <h1 className={styles.heading}>{title}</h1>;

export default React.memo(Heading);
