import { apply } from 'twind';

const span = `font-bold`;

const AboutUs = () => (
  <div className="flex flex-col pb-20">
    <h1 className="text-3xl font-bold uppercase">About Us</h1>
    <p className="text-lg font-light">
      We are a theater association based in Stockholm, Sweden. We try to bring the <span className={span}>joy</span> of <span className={span}>improv</span> and <span className={span}>theater</span> to <span className={span}>local and international students</span>.
      Whether you're a <span className={span}>seasoned performer</span> or a <span className={span}>complete novice</span>, our improv sessions offer a supportive environment to explore your creativity, sharpen your acting skills, and <span className={span}>unleash your imagination</span>.
      We take <span className={span}>pride</span> in our <span className={span}>annual show production</span>, bringing you a <span className={span}>unique</span> and <span className={span}>interactive</span> theatrical experience.
      We make the <span className={span}>Swedish spex tradition</span> accessible to international students through performances in English, promoting <span className={span}>cultural exchange</span> and creating <span className={span}>memorable experiences</span> for all.
      Join us at The English Theater Improv Club and discover the <span className={span}>magic</span> of improv, the excitement of live performance, and the <span className={span}>joy</span> of being part of a <span className={span}>vibrant theater community</span>!
    </p>
  </div>
);

export default AboutUs;