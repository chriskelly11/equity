import React from 'react';
import { Grid, Image, Card, Icon, Rating } from 'semantic-ui-react'
const LandingPage = () =>
  <div className="displayGrid">
    <Grid relaxed='very' columns={4}>
      <Grid.Column>
        <Card>
          <Image src='/assets/images/350butter.jpg' />
          <Card.Content>
            <Card.Header>Yeezy Boost 350 Butter </Card.Header>
            <Card.Meta>
              <span className='date'>Posted 3/5/18</span>
            </Card.Meta>
            <Card.Description>Size 11.5 </Card.Description> 
            <Rating icon='star' defaultRating={5} maxRating={5}/>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src='/assets/images/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              22 Friends
      </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src='/assets/images/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              22 Friends
      </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Image src='/assets/images/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='like' />
              22 Friends
      </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </div>

export default LandingPage;
