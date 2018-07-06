import React from 'react'
import { shallow } from 'enzyme'

import Header from '../../../../modules/shared/components/layout/Header'

describe('Header Component', () => {
  const header = shallow(<Header />)
  it('should redenders properly', () => {
    expect(header).toMatchSnapshot()
  })
})
