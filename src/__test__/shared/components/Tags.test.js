import React from 'react'
import { shallow } from 'enzyme'

import Tags, { renderTags } from '../../../modules/shared/components/Tags'

describe('Tags Component', () => {
  const mockOnClickTag = jest.fn()
  const props = {
    tags: [{ name: 'Tag 1', _id: '1' }, { name: 'Tag 2', _id: '2' }],
    onClickTag: mockOnClickTag
  }
  const tags = shallow(<Tags {...props} />)

  it('should render properly', () => {
    expect(tags).toMatchSnapshot()
  })

  it('should render 2 tags', () => {
    expect(tags.children().find({ id: props.tags[0]._id }).exists()).toBe(true)
    expect(tags.children().find({ id: props.tags[1]._id }).exists()).toBe(true)
  })

  describe('when calling `renderTags` function', () => {
    const resultRenderTags = renderTags(props.tags, props.onClickTag)
    it('should return an array with 2 itens', () => {
      expect(resultRenderTags).toHaveLength(2)
    })
  })

  describe('when clicking on a `Tag`', () => {
    it('should call `onClickTag` function', () => {
      tags.children().find({ id: props.tags[0]._id }).simulate('click')
      expect(mockOnClickTag).toHaveBeenCalledWith(props.tags[0])
    })
  })
})
