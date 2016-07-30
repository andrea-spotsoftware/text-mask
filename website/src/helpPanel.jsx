import './styles.scss'
import React from 'react'
import {connect} from 'react-redux'
import {Links, Panel, Row} from './partials.jsx'

const HelpPanel = React.createClass({
  render() {
    const {props} = this

    return (
      props.choiceName === 'Date (auto-corrected)' && (
        <Row>
          <Panel title='Piped'>
            <p>
              User input in this configuration is passed through a <Links.pipe/> that auto-corrects some values. For
              example,
              if you enter <code>9</code> in the 1st digit of the month, it'll auto-correct it to <code>09</code>. Or
              if you enter <code>0</code> in the 1st digit of the year, it'll auto-correct it to <code>200</code>.
            </p>

            <p>
              It is using <Links.autoCorrectedMmddyyyyPipe />, which is available as an <Links.addon/>.
            </p>

            <p style={{marginBottom: 0}}>
              This configuration also uses the <Links.onReject/> callback to show a hint message when user
              enters a rejected character.
            </p>
          </Panel>
        </Row>
      ) || props.mask.name === 'numberMask' && (
        <Row>
          <Panel title='Mask function'>
            <p>
              This is a <Links.maskFunction/>, which means it reads user input first and based on user input,
              it returns a mask string.
            </p>

            <p>
              The mask function used in this configuration is <Links.createNumberMask/>, which is
              available as an <Links.addon/>.
            </p>

            <p style={{marginBottom: 0}}>
              <code>createNumberMask</code> can be used to mask amounts, currencies, percentages, and more.
            </p>
          </Panel>
        </Row>
      )
    )
  }
})

export default connect((state) => ({choiceName: state.name, mask: state.mask}))(HelpPanel)
