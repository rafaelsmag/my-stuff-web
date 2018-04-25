import React from 'react'
import { string } from 'prop-types'
import { Div } from 'glamorous'
import { Image } from 'semantic-ui-react'
import { Metrics, Fonts } from '../../../../config/constants'

const SmallAvatarRow = ({image, title}) => (
  <Div css={styles.container}>
    { image &&
      <Div css={styles.avatarImage}>
        <Image src={image} circular fluid />
      </Div>
    }
    <Div css={styles.title}>{title}</Div>
  </Div>
)

SmallAvatarRow.defaultProps = {
  image: ''
}

SmallAvatarRow.propTypes = {
  title: string.isRequired,
  image: string
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  avatarImage: {
    width: Metrics.tinyImage,
    marginRight: Metrics.tinySpacing
  },
  title: {
    textAlign: 'center',
    ...Fonts.style.detail
  }
}

export default SmallAvatarRow
