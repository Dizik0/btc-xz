import style from './About.module.scss'
import contact from '../../img/contact.jpg'

const About = () => {
  return (
    <div className={style.about}>
      <h1 className={style.mainTitle}>About btc-ex.org LTD</h1>
      <p className={style.textAbout}>
        Established in 2018 as the first cloud mining provider,{' '}
        <a href="/" className={style.link}>
          btc-ex.org
        </a>{' '}
        has become a multi-functional cryptocurrency exchange, trusted by over a
        million users.
      </p>
      <p className={style.textAbout}>
        Bit Trading offers cross-platform trading via website, mobile app,
        WebSocket and REST API, providing access to high liquidity orderbook for
        top currency pairs on <br /> the market. Instant Bitcoin buying and
        selling is available via simplified bundle interface.
      </p>
      <p className={style.textAbout}>
        The exchange has developed a multi-level account system with individual
        approach to each customer, from Bitcoin beginners to institutional
        traders. Worldwide <br /> coverage, multiple payment options, and 24/7
        support are accompanied by time-proven platform stability that
        guarantees safety of assets and data.
      </p>

      <div className={style.contactBox}>
        <div>
          <h2 className={style.secondTitle}>Contact Information</h2>
          <b className={style.contact}>ADDRESS</b>
          <p className={style.textAbout}>
            61B Lindgren Esplanade West Marcia, KAS 2419
          </p>
          <b className={style.contact}>EMAIL</b>
          <br />
          <a href="mailto:btc.xz.online@gmail.com" className={style.link}>
            btc.xz.online@gmail.com
          </a>
        </div>
        <div className={style.contactBoxImg}>
          <img className={style.contactImg} alt="" src={contact} />
        </div>
      </div>
    </div>
  )
}

export default About
