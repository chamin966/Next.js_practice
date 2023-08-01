import { Fragment } from 'react';
import styles from '../styles/header.module.scss';
import Header from '../components/common/Header';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

function Feedback() {
  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            className={styles.box}
            key="btn" // jsx 배열에는 요소마다 유일한 키값이 필요함
            style={{ marginRight: 8 }}
            onClick={() => {
              alert('복사');
            }}
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link key="link" className={styles.box} href="/">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main></main>
    </Fragment>
  );
}

export default Feedback;
