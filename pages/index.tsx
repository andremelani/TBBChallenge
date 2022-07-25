/* eslint-disable @next/next/no-img-element */

import styles from "../styles/Home.module.scss";

import { useEffect } from "react";

import type { NextPage } from "next";

import { Title } from "../src/components/Title";
import { Paragraph } from "../src/components/Paragraph";
import { Layout } from "../src/components/Layout";
import { ListProducts } from "../src/components/ListProducts";
import { ListArticle } from "../src/components/ListArticle";
import { ButtonSeeMore } from "../src/components/ButtonSeeMore";

import AOS from "aos";
import "aos/dist/aos.css";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <div className={styles.background} data-aos="fade-up">
        <img
          src="/images/banner-hero.jpg"
          style={{ objectFit: "cover", width: "100%" }}
          alt="banner"
        />
      </div>

      <div className={styles.backgroundMobile} data-aos="fade-up">
        <img
          src="/images/banner-hero-mobile.jpg"
          style={{ objectFit: "cover", width: "100%" }}
          alt="banner"
        />
      </div>

      <Title title="we're here to help" />
      <Paragraph>
        Co-created with gynaecologists, our revolutionary products have been
        expertly developed to support your intimate microbiome and pH balance,
        and strengthen overall natural health.
      </Paragraph>
      <Paragraph>
        As the experts in intimate hygiene, we want to bring discussion about
        intimate wellness care out of the dark and demystify the taboos that
        surround it.
      </Paragraph>
      <div className={styles.backgroundIcons} data-aos="fade-up">
        <img
          src="/images/icons.jpg"
          style={{ objectFit: "cover", width: "60%" }}
          alt="banner"
        />
      </div>

      <div className={styles.backgroundMobile} data-aos="fade-up">
        <img
          src="/images/icons.jpg"
          style={{ objectFit: "cover", width: "100%" }}
          alt="banner"
        />
      </div>
      <Title title="whatever your age. whatever your lifestyles. whatever your interests" data-aos="zoom-in"  />
      <Paragraph>
        Co-created with gynaecologists, our revolutionary products have been
        expertly developed to support your intimate microbiome and pH balance,
        and strengthen overall natural health.
      </Paragraph>
      <Paragraph>
        As the experts in intimate hygiene, we want to bring discussion about
        intimate wellness care out of the dark and demystify the taboos that
        surround it.
      </Paragraph>
      <Title title="our products" data-aos="zoom-in"  />

      <div
        className={styles.cardList}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <ListProducts />
      </div>

      <div className={styles.background} data-aos="fade-up">
        <img
          src="/images/banner-products.jpg"
          style={{ objectFit: "cover", width: "100%" }}
          alt="banner"
        />
      </div>
      <div className={styles.backgroundMobile} data-aos="fade-up">
        <img
          src="/images/banner-products-mobile.jpg"
          style={{ objectFit: "cover", width: "100%" }}
          alt="banner"
        />
      </div>
      <Title title="keep up to date with our discoveries" data-aos="zoom-in"  />

      <div
        className={styles.cardList}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="1500"
      >
        <ListArticle />
      </div>
      <ButtonSeeMore title="see more" />
    </Layout>
  );
};

export default Home;
