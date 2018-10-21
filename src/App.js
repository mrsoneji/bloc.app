import React, { Component } from 'react';
import { List, Segment, Input, Label, Menu, Form, TextArea, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Form style={{'width': '300px', 'display': 'flex', 'flex-direction': 'column', 'justify-content': 'center'}}>
        <Form.Input label='Email' placeholder='joe@schmoe.com' />
        <Form.Input label='Password' placeholder='Input your passcode' />
        <Button>Submit</Button>
      </Form>
    )
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="left-menu">
          <ListExampleInverted />
        </div>
        <div className="middle-menu">
          <MiddleMenu  />
        </div>
        <div className="draft-box">
          <TextArea placeholder="Your new draft..." autoHeight />
        </div>
      </div>
    )
  }
}

const MiddleMenu = () => (
  <Menu vertical style={{width:'100%', height:'100%'}}>
    <Menu.Item>
      <Input icon='search' placeholder='Search mail...' />
    </Menu.Item>

    <Menu.Item name='inbox' active={true} onClick={() => {}}>
      <Label color='teal'>1</Label>
      Inbox
    </Menu.Item>

    <Menu.Item name='spam' active={false} onClick={() => {}}>
      <Label>51</Label>
      Spam
    </Menu.Item>

    <Menu.Item name='updates' active={false} onClick={() => {}}>
      <Label>1</Label>
      Updates
    </Menu.Item>

  </Menu>
)

const ListExampleInverted = () => (
  <Segment inverted>
    <List divided inverted relaxed>
    {
      [{header: 'Snickerdoodle', description: 'An excellent companion'}, {header: 'Poodle'}, {header: 'Paulo'}].map(value => {
        return (
          <List.Item>
            <List.Content>
              <List.Header>{value.header}</List.Header>
              {value.description}
            </List.Content>
          </List.Item>
        )  
      })
    }
    </List>
  </Segment>
)

export default App;
