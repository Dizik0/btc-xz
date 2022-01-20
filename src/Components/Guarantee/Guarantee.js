import style from './Guarantee.module.scss'

const Guarantee = () => {
  return (
    <div className={style.guarantee}>
      <h2 className={style.mainTitle}>
        Reliable investment and exchange platform for <br /> cryptocurrencies
      </h2>
      <p className={style.secondTitleGuarantee}>
        Here are a few reasons why you should choose Btc-xz.online
      </p>
      <div className={style.guaranteeBigDiv}>
        <div className={style.guaranteeDiv}>
          <span className={style.svgLightning}></span>
          <h3 className={style.titleSvg}>Fast & Secured</h3>
          <p className={style.secondTitleGuarantee}>
            We have built some of the world's most sophisticated cryptographic
            security systems and have never been hacked.
          </p>
        </div>
        <div className={style.guaranteeDiv}>
          <span className={style.svgLock}></span>
          <h3 className={style.titleSvg}>Covered By Insurance</h3>
          <p className={style.secondTitleGuaranteeLock}>
            Cryptocurrency stored on our servers is covered by our insurance
            policy.
          </p>
        </div>
        <div className={style.guaranteeDiv}>
          <span className={style.svgCheckMark}></span>
          <h3 className={style.titleSvg}>No Hidden fees</h3>
          <p className={style.secondTitleGuarantee}>
            We are a transparent and vision driven company, we make your Crypto
            experience the best one.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guarantee
