import style from './FirstSection.module.scss'

const FirstSection = () => {
  return (
    <div className={style.firstSection}>
      <div className={style.fSBlock}>
        <h1 className={style.mainTitle}>Invest and exchange cryptocurrency</h1>
        <p className={style.secondTitle}>
          Your journey to the crypto world starts right here, Take the
          opportunities our system provide to make good returns from
          cryptocurrency.
        </p>
        <button className={style.button}>GET STARTED</button>
      </div>
      <div className={style.fSBlock}></div>
    </div>
  )
}

export default FirstSection
