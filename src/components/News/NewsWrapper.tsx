import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { gewtNews } from "../../store/reducers/newsReducer/getNewsAction"
import { News } from "./News"
import style from './News.module.scss'

const NewsWrapper = () => {

    const dispatch = useAppDispatch()
    const { news } = useAppSelector(state => state.news)


    useEffect(() => {
        dispatch(gewtNews())
    }, [])


    return (
        <div className={style.newsWrapper}>
            <h1>Новости</h1>
            <p>Тут не новсти, а загружается список постов с JSON Placeholder</p>
            <ul>
                {news.length > 0 && news.slice(0, 10).map(i => <News key = {i.id} {...i} />)}
            </ul>
        </div>
    )
}

export default NewsWrapper