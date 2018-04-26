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
    flexWrap: 'wrap',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius,
    marginBottom: Metrics.standardSpacing,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.15)'
  }
}

export default Card
