import style from './RunningLine.module.scss'

const RunningLine = () => {
  return (
    <div className={style.runningLine}>
      <marquee direction="left" scrollamount="10" className={style.marquee}>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>DASH/USD</span>
          115.1 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>BTC/USD</span>
          38061.11 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>ETH/USD</span>
          2756.80 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>BTH/USD</span>
          334.1 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>LTС/USD</span>
          121.2 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>DASH/USD</span>
          115.1 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>BTC/USD</span>
          38061.11 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>ETH/USD</span>
          2756.80 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>BTH/USD</span>
          334.1 $
        </div>
        <div className={style.boxMarquee}>
          <span className={style.cryptocurrency}>LTС/USD</span>
          121.2 $
        </div>
      </marquee>
    </div>
  )
}

export default RunningLine
