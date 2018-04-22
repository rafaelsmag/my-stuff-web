import React, { Component } from 'react'
import { Image, Card } from 'semantic-ui-react'
import CardFeed from '../../shared/components/Card'

class FeedCard extends Component {
  render () {
    const { post } = this.props
    return (
      <CardFeed>
        <Card.Content>
          <Card.Header>
            <Image floated='left' size='mini' src={post.user.image} />
            {post.user.name}
          </Card.Header>
          <Card.Meta>
            {post.tags.map(tag => tag.name)}
          </Card.Meta>
        </Card.Content>
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
