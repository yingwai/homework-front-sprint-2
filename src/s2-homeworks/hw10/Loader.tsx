import s from './Loader.module.css'
import loading from "./loading.png"

export const Loader = () => <img src={loading} alt="loading" className={s.loader} />
