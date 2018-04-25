import React, { Component } from 'react'
import { Image, Card } from 'semantic-ui-react'
import CardFeed from '../../shared/components/Card'
import CardHeader from '../../shared/components/CardHeader'

class FeedCard extends Component {
  render () {
    const { post } = this.props
    return (
      <CardFeed>
        <CardHeader title={post.title} tags={post.tags} author={post.user}/>
        <Image src={post.images[0]} fluid/>
        <Card.Content>
          <Card.Description>
            {post.body}
          </Card.Description>
        </Card.Content>
      </CardFeed>
    )
  }
}

export default FeedCard
