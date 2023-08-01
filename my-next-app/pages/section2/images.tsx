/** https://nextjs.org/docs/api-reference/next/image */
import type { NextPage } from 'next';
import Image from 'next/image';
import LegacyImage from 'next/legacy/image';
import example from '/public/example.jpg';

const Images: NextPage = () => {
  return (
    <main>
      <hr style={{ margin: '32px 0' }} />

      <h1>next/image</h1>

      <figure>
        <Image
          src={example}
          alt="v13 image"
          width={500}
          height={100}
          placeholder="blur"
        />
        <figcaption>v13 image 원본 높이 너비 설정</figcaption>
      </figure>
      <hr style={{ margin: '32px 0' }} />

      <figure>
        <Image
          src={example}
          alt="v13 image"
          width={500}
          height={100}
          placeholder="blur"
          style={{ objectFit: 'cover' }}
        />
        <figcaption>v13 image 원본 높이, 너비, 핏 커버</figcaption>
      </figure>
      <hr style={{ margin: '32px 0' }} />

      <figure>
        <Image
          src={example}
          alt="v13 image"
          layout="responsive"
          placeholder="blur"
          style={{ maxWidth: 600, objectFit: 'cover' }}
        />
        <figcaption>
          v13 image 원본 높이, 너비, 레이아웃 responsive, maxWidth 600
        </figcaption>
      </figure>
      <hr style={{ margin: '32px 0' }} />

      <figure>
        <Image
          src={example}
          alt="v13 image"
          width={500}
          height={100}
          placeholder="blur"
          style={{ objectFit: 'contain' }}
        />
        <figcaption>v13 image 원본 높이, 너비, 핏 컨테인</figcaption>
      </figure>
      <hr style={{ margin: '32px 0' }} />

      <figure>
        <Image
          src="https://lecture-1.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image 외부 높이 너비</figcaption>
      </figure>
      <hr style={{ margin: '32px 0' }} />
    </main>
  );
};

export default Images;
