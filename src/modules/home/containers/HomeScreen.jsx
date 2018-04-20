import React, { Component } from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { getPosts } from '../../../services/backend/postService'

class HomeScreen extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    const posts = getPosts()
    this.setState({
      posts
    })
  }

  renderFeed = () => {
    return this.state.posts.map((post) => {
      return (
        <Card key={post._id} fluid>
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
        </Card>
      )
    })
  }

  render () {
    return (
      <Grid columns={1} centered >
        <Grid.Column mobile={15} tablet={10} computer={8}>
          {this.renderFeed()}
        </Grid.Column>
      </Grid>
    )
  }
}

export default HomeScreen
