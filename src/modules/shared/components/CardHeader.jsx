import React from 'react'
import { func } from 'prop-types'
import { Div } from 'glamorous'
import { Metrics, Fonts, Colors } from '../../../config/constants'
import SmallAvatarRow from './rows/SmallAvatarRow'
import Tags from './Tags'

const CardHeader = ({title, tags, onClick, author}) => (
  <Div css={styles.cardHeader} onClick={onClick}>
    <Div css={styles.title}>{title}</Div>
    <Tags tags={tags} />
    {
      author &&
      <SmallAvatarRow title={author.name} image={author.image}/>
    }
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
    padding: Metrics.smallSpacing,
    borderBottom: `${Metrics.borderWidth} solid ${Colors.lightDivider}`
  },
  title: {
    marginBottom: Metrics.tinySpacing,
    ...Fonts.style.h5
  }
}

export default CardHeader
