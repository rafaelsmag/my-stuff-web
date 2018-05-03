import React from 'react'
import { shallow } from 'enzyme'
import { Div } from 'glamorous'
import CardHeader, { styles } from '../../../modules/home/components/CardHeader'
import SmallAvatarRow from '../../../modules/shared/components/rows/SmallAvatarRow'
import Tags from '../../../modules/shared/components/Tags'

const props = {
  onClick: () => {},
  title: 'Lorem ipsum dolor sit amet',
  author: {
    image: 'https://www.shareicon.net/data/128x128/2016/07/26/802026_man_512x512.png',
    name: 'Steve Sanders'
  },
  tags: [{_id: '1', name: 'Sobremesas'}, {_id: '2', name: 'Bolo'}]
}

describe('FeedCard Component', () => {
  const cardHeader = shallow(<CardHeader {...props} />)
  it('should redenders properly', () => {
    expect(cardHeader).toMatchSnapshot()
  })

  it('should not render the Tags component', () => {
    const { tags, ...propsWithoutTags } = props
    const wrapper = shallow(<CardHeader {...propsWithoutTags} />)
    expect(wrapper.find('Tags').exists()).toEqual(false)
  })

  it('should not render the SmallAvatarRow component', () => {
    const { author, ...propsWithoutAuthor } = props

    const wrapper = shallow(<CardHeader {...propsWithoutAuthor} />)
    expect(wrapper.find('SmallAvatarRow').exists()).toEqual(false)
  })
})
