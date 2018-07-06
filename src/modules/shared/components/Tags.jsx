import React from 'react'
import { arrayOf, shape, func, string } from 'prop-types'
import { Icon } from 'semantic-ui-react'
import { Div } from 'glamorous'
import { Metrics, Fonts, Colors } from '../../../config/constants'

export const renderTags = (tags, onClick) => {
  return tags.map((tag) => (
    <Div id={tag._id} css={styles.tagName} key={tag._id} onClick={() => onClick(tag)}>{tag.name}</Div>
  ))
}

const Tags = ({ tags, onClickTag }) => (
  <Div css={styles.container}>
    <Div>
      <Icon name="tags" disabled size='small'/>
    </Div>
    {renderTags(tags, onClickTag)}
  </Div>
)

Tags.defaultProps = {
  onClickTag: () => {}
}

Tags.propTypes = {
  tags: arrayOf(shape({
    name: string.isRequired,
    _id: string
  })).isRequired,
  onClickTag: func
}

const styles = {
  container: {
    display: 'flex',
    flex: '1',
    marginTop: Metrics.xsSpacing,
    flexWrap: 'wrap'
  },
  tagName: {
    margin: `0 ${Metrics.xxsSpacing} ${Metrics.xxsSpacing} ${Metrics.xxsSpacing}`,
    borderRadius: Fonts.size.tiny,
    fontSize: Fonts.size.tiny,
    color: Colors.primary,
    fontWeight: '600'
  }
}

export default Tags
