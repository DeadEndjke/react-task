import s from './Header.module.scss'

export default function Header(){
    return(
        <header className={s.header}>
            <ul className={s.links}>
                <li className={s.item}>Post list</li>
                <li className={s.item}>About me</li>
                <li className={s.item}>Details</li>
            </ul>
        </header>
    )
}