import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';

interface Props {
  rightElements?: React.ReactElement[];
}

const HeaderComponent = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href={'/feedback'} className={styles.box}>
          <Image
            src="/inflearn.png"
            alt={'인프런 로고'}
            width={110}
            height={20}
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default HeaderComponent;
