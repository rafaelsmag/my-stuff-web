import React from 'react'
import { Input, Image, Grid } from 'semantic-ui-react'
import Images from '../../../../config/constants/images'

const Header = (props) => (
  <Grid columns={3} centered>
    <Grid.Column only='tablet computer' floated='left' tablet={4} computer={4}>
      <Image src={Images.logo} size='tiny'/>
    </Grid.Column>
    <Grid.Column mobile={10} tablet={8} computer={8} textAlign='center' stretched verticalAlign='middle'>
      <Input placeholder='Search...' />
    </Grid.Column>
    <Grid.Column textAlign='right' mobile={6} tablet={4} computer={4}>
      <Image floated='right' src={Images.logo} size='tiny'/>
    </Grid.Column>
  </Grid>
)

export default Header
