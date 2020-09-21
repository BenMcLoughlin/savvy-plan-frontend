import { compose } from "redux"
import { connect } from "react-redux"
import { set, remove } from "../redux/actions"
import * as I from "types"

//Pages
import { Questions as _Onboard } from "./Questions"
import { Display as _Display } from "./Display"
import { LandingPage as _LandingPage } from "./LandingPage"

const mapStateToProps = (state: I.state) => ({
  state,
})

export const LandingPage = compose(connect(mapStateToProps, { set, remove }))(_LandingPage)

export const Display = compose(connect(mapStateToProps, { set, remove }))(_Display)

export const Questions = compose(connect(mapStateToProps, { set, remove }))(_Onboard)
