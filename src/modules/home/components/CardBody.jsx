import React from 'react'
import { Div } from 'glamorous'
import { Image } from 'semantic-ui-react'
import { arrayOf, string } from 'prop-types'
import { Metrics, Fonts } from '../../../config/constants'

const CardBody = ({text, images}) => (
  <Div>
    { images.length > 0 &&
      <Div css={styles.imageWrapper}>
        <Image src={images[0]} fluid/>
      </Div>
    }
    {
      text !== '' &&
      <Div css={styles.textContainer}>{text}</Div>
    }
  </Div>
)

CardBody.defaultProps = {
  images: [],
  text: ''
}

CardBody.propTypes = {
  title: string,
  images: arrayOf(string)
}

const styles = {
  textContainer: {
    padding: `0 ${Metrics.smallSpacing} ${Metrics.smallSpacing} ${Metrics.smallSpacing}`,
    ...Fonts.style.regular
  },
  imageWrapper: {
    marginBottom: Metrics.smallSpacing
  }
}

export default CardBody
