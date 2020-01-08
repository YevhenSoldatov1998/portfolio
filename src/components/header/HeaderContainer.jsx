import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
    return {
        nav: state.header.nav
    }
}
export const HeaderContainer = connect(mapStateToProps)(Header)