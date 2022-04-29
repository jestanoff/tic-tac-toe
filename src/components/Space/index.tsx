import * as React from 'react';
import classNames from 'classnames/bind';
import Mark from 'components/Mark';
import { CSS_CLASSES, PLAYER_X, SYMBOLS } from '../../constants';
import styles from './Space.css';

type SpaceType = {
  id: number;
  handleSpaceClick: (id: number) => void;
  status?: number;
};

const cx = classNames.bind(styles);

const Space = ({ id, handleSpaceClick, status = 0 }: SpaceType) => {
  const hasBeenMarked = !!status;
  const title = `${CSS_CLASSES[id].join(' ')} ${hasBeenMarked ? `space marked by ${SYMBOLS[status]}` : 'empty space'}`;
  const capitalisedTitle = `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  const handleClick = React.useCallback(() => handleSpaceClick(id), [handleSpaceClick, id]);

  return (
    <button className={cx('space', CSS_CLASSES[id])} onClick={handleClick} title={capitalisedTitle}>
      {hasBeenMarked && <Mark type={status === PLAYER_X ? 'cross' : 'circle'} isAnimated />}
    </button>
  );
};

export default React.memo(Space);
