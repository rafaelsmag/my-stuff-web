import React from 'react'
import { func, string, arrayOf, shape } from 'prop-types'
import { Div } from 'glamorous'
import { Metrics, Fonts } from '../../../config/constants'
import SmallAvatarRow from '../../shared/components/rows/SmallAvatarRow'
import Tags from '../../shared/components/Tags'

const CardHeader = ({title, tags, onClick, author}) => (
  <Div css={styles.cardHeader} onClick={onClick}>
    <Div css={styles.title}>{title}</Div>
    {
      tags &&
      <Tags tags={tags} />
    }
    {
      author &&
      <SmallAvatarRow title={author.name} image={author.image}/>
    }
  </Div>
)

CardHeader.defaultProps = {
  onClick: () => {},
  title: '',
  tags: undefined,
  author: undefined
}

CardHeader.propTypes = {
  onClick: func,
  title: string,
  tags: arrayOf(
    shape({
      name: string.isRequired,
      _id: string
    })
  ),
  author: shape({
    name: string,
    image: string
  })
}

export const styles = {
  cardHeader: {
    padding: Metrics.smallSpacing
    // borderBottom: `${Metrics.borderWidth} ${Colors.darkDivider} solid`
  },
  title: {
    paddingBottom: Metrics.xxsSpacing,
    paddingTop: Metrics.xxsSpacing,
    ...Fonts.style.h5
  }
}

export default CardHeader
