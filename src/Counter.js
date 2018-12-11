import React from 'react'
import { connect } from 'react-redux'
import { inc } from './state/counter'
import { dec } from './state/counter'




const mapStateToProps = state => ({
    currentValue: state.counterReducerName.counter

})


const mapDispatchToProps = dispatch => ({
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),


})

const Counter = (props) => {
    return (
        <div>
            <h1>Current Value: {props.currentValue}</h1>
            <button onClick={() =>props.inc()}>+</button>
            <button onClick={() => props.dec()}>-</button>


        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)