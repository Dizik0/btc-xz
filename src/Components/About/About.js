import style from './About.module.scss'

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.AboutBtcXz}></div>
      <div className={style.AboutBtcXz}>
        <h2 className={style.mainTitle}>
          About
          <b>
            <span className={style.OrgBtc}> Btc</span>-Xz
          </b>
          <span className={style.online}>.online</span>
        </h2>
        <p className={style.secondTitle}>
          The best place to invest and exchange cryptocurrency today.
          <tr />
          <a href="/" className={style.link}>
            Btc-xz.online
          </a>{' '}
          is a cutting edge investment and exchange platform based in Australia.
          It was created in February 2018. We are strictly trading, mining with
          a lot of investment and exchange and assets in paid ads, Forex also
          buys signals from major exchanges.
          <tr /> The vision of{' '}
          <a href="/" className={style.link}>
            Btc-xz.online
          </a>{' '}
          is to build a strong alliance and permanent partnership with our
          investors; also leads them to financial independence.
        </p>
        <button className={style.button}>SIGN UP</button>
      </div>
    </div>
  )
}

export default About
