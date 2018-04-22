import React from 'react'
import { func, any } from 'prop-types'
import { Div } from 'glamorous'

import { Colors, Metrics } from '../../../config/constants'

const Card = ({children, onClick}) => {
  return (
    <Div onClick={onClick} css={styles.card}>
      {children}
    </Div>
  )
}

Card.defaultProps = {
  onClick: () => {},
  children: null
}

Card.propTypes = {
  onClick: func,
  children: any
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.white,
    border: `${Metrics.borderWidth} solid ${Colors.darkDivider}`,
    borderRadius: Metrics.borderRadius,
    marginBottom: Metrics.standardSpacing
  }
}

export default Card
