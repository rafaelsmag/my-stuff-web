import React from 'react'
import { shallow } from 'enzyme'

import FeedCard from '../../../modules/home/components/FeedCard'

const props = {
  post: {
    _id: '1',
    title: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    images: ['https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg'],
    user: {
      image: 'https://www.shareicon.net/data/128x128/2016/07/26/802026_man_512x512.png',
      name: 'Steve Sanders'
    },
    tags: [{_id: '1', name: 'Sobremesas'}, {_id: '2', name: 'Bolo'}]
  }
}

describe('FeedCard Component', () => {
  const feedCard = shallow(<FeedCard {...props} />)
  it('should redenders properly', () => {
    expect(feedCard).toMatchSnapshot()
  })
})
