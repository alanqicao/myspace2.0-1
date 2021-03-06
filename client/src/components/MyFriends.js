import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data, }) );
  }

  render() {
    const { friends, } = this.state;
    return (
      <div id="wrap">
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { friend.username }
              </Card.Header>
              <Card.Meta>
                { `${friend.age}  ${friend.gender}` }
              </Card.Meta>
              <Card.Description>
                { friend.description }
              </Card.Description>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  }

}
export default MyFriends;