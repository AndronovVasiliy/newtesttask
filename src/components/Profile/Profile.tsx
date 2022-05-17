import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { authReduser } from "../../store/reducers/authReducer/authReducer"
import style from "./Profile.module.scss"

function Profile() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const {isAuth} = useAppSelector(state => state.auth)
  const { unLogin } = authReduser.actions

  useEffect(() => {
    !isAuth && navigate("/login")
  }, [isAuth])
  


  return (
    <div>
      <div className={style.display}>
        <div className={style.displayitem}>
          <div className={style.card + " " + style.anabelle}>
            <div className={style.cardtop}></div>
            <div className={style.cardprofile}>
              <div className={style.profileimage}>
              </div>
            </div>
            <div className={style.cardinfo}>
              <div className={style.infotitle}>
                <h2>Anabelle Saunders</h2>
                <h3>Paradigm Coordinator</h3>
              </div>
              <div className={style.infobio}>
                Proin non rhoncus sapien. Cras tempus odio elit, eget hendrerit neque sollicitudin at. Suspendisse feugiat nunc quis venenatis volutpat. Cras finibus sit amet velit vel dignissim. Curabitur vehicula porttitor leo a tincidunt.
              </div>
            </div>
            <button onClick={() => {
              dispatch(unLogin())
            }}>Выйти</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile