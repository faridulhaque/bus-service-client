import React from "react";
import styles from "../../styles/header/Intro.module.css";
import Image from "next/image";
import bus from "../../assets/Coach-Bus-mockup-04.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Intro = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.intro}>
      <div className={styles.textContainer}>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h1>OSTRICH</h1>
          <h2>Bus Service</h2>
          <p>Where Speed, Comfort, and Safety Converge</p>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src={bus} width={800} height={500} alt="bus"></Image>
      </div>
    </div>
  );
};

export default Intro;
