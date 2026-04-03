import { Card } from 'components/card/Card';
import React, { type FC } from 'react';
import { Container } from 'shared/ui/container/Container';
import styles from './GalleryWidget.module.scss';

export const GalleryWidget: FC = () => {
  return (
    <section className={styles.gallerySection}>
      <Container className={styles.galleryContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Card key={item} />
        ))}
      </Container>
    </section>
  );
};
