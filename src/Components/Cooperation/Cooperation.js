import style from './Cooperation.module.scss'

import btcCom from '../../img/BTC.Com.png'
import blockchain from '../../img/blockchain.png'
import comodo from '../../img/comodo.png'
import bitcoin from '../../img/bitcoin.png'

const Cooperation = () => {
  return (
    <div className={style.cooperation}>
      <div className={style.partners}>
        <img className={style.partnersPng} alt="" src={bitcoin}></img>
      </div>
      <div className={style.partners}>
        <img className={style.partnersPng} alt="" src={blockchain}></img>
      </div>
      <div className={style.partners}>
        <img className={style.partnersPng} alt="" src={btcCom}></img>
      </div>
      <div className={style.partners}>
        <img className={style.partnersPng} alt="" src={comodo}></img>
      </div>
    </div>
  )
}

export default Cooperation
