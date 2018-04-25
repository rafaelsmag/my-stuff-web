import React from 'react'
import { arrayOf, shape, func, string } from 'prop-types'
import { Icon } from 'semantic-ui-react'
import { Div } from 'glamorous'
import { Metrics, Fonts, Colors } from '../../../config/constants'

const renderTags = (tags, onClick) => {
  return tags.map((tag) => (
    <Div css={styles.tagName} onClick={() => onClick(tag)}>{tag.name}</Div>
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
    flex: '1 1 auto',
    marginBottom: Metrics.xsSpacing,
    flexWrap: 'wrap'
  },
  tagName: {
    margin: `0 ${Metrics.xxsSpacing} ${Metrics.xxsSpacing} 0`,
    padding: Metrics.xxsSpacing,
    // backgroundColor: Colors.lightBackground,
    borderRadius: Fonts.size.tiny,
    fontSize: Fonts.size.tiny,
    lineHeight: Fonts.size.tiny,
    color: Colors.primary,
    // textTransform: 'uppercase',
    fontWeight: '600'
  }
}

export default Tags
