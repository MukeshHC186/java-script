import NavMain from '../../pages/nav-section/nav-main/Nav-main'
import NavProfile from '../../pages/nav-section/nav-profile/Nav-profile'
import NavSearch from '../../pages/nav-section/nav-search/Nav-search'
import './Navbaar.scss'
const Navbaar=()=>{
    return(
        <>
            <NavSearch/>
             <NavMain/>
            <NavProfile/>
        </>
    )
}
export default Navbaar