import React from 'react'
import { func } from 'prop-types'
import { Div } from 'glamorous'
import { Metrics } from '../../../config/constants'

const CardHeader = ({title, subtitle, extraSubtitle, onClick}) => (
  <Div css={styles.cardHeader} onClick={onClick}>
  </Div>
)

CardHeader.defaultProps = {
  onClick: () => {},
  children: null
}

CardHeader.propTypes = {
  onClick: func
}

const styles = {
  cardHeader: {
    margin: Metrics.standardSpacing
  }
}

export default CardHeader
