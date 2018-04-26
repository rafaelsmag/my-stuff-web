import React, { Component } from 'react'
import CardFeed from '../../shared/components/Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

class FeedCard extends Component {
  render () {
    const { post } = this.props
    return (
      <CardFeed>
        <CardHeader title={post.title} tags={post.tags} author={post.user}/>
        <CardBody images={post.images} text={post.body} />
      </CardFeed>
    )
  }
}

export default FeedCard
