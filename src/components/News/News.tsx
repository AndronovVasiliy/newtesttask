import { NewsType } from "../../store/reducers/newsReducer/newResucer"
import style from "./News.module.scss"

export const News = ({title, body}: NewsType) => {
  return (
    <li className={style.news}>
        <h2>{title}</h2>
        <p>{body}</p>
    </li>
  )
}
