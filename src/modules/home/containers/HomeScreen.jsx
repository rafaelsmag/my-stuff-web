import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { getPosts } from '../../../services/backend/postService'
import FeedCard from '../components/FeedCard'

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
        <FeedCard key={post._id} post={post}/>
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
