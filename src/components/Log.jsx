import React from 'react';
import './Log.css';
import timeGreeting from '../utilities/time-greeting.js';
import randomMessage from '../utilities/random-message';
import { Menu, Dropdown, Icon, Rate, Radio, Input, Button, Modal } from 'antd';
import { Redirect } from 'react-router-dom'
const { TextArea } = Input;
const { SubMenu } = Menu;


class Log extends React.Component {
  state = {
    modalVisible: false,
    redirectTo: '/log',
    message: 'Way to go!! 💪',
  };

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  goToPlan = () => {
    this.setState({
      redirectTo: '/plan',
    });
  };

  goToData = () => {
    this.setState({
      redirectTo: '/data',
    });
  };

  renderPage = () => {
    console.log(this.state.redirectTo);
    return <Redirect to={this.state.redirectTo} />
  };

  render() {
    const workoutTypes = ['Track', 'Lifting', 'Throwing', 'Pod'];

    const menu = (
      <Menu>
        {workoutTypes.map((workoutType) => (
          <SubMenu title={workoutType}>
            <Menu.Item>Workout 1</Menu.Item>
            <Menu.Item>Workout 2</Menu.Item>
            <Menu.Item>Workout 3</Menu.Item>
            <Menu.Item>Add new</Menu.Item>
          </SubMenu>
        ))}

      </Menu>
    );

    return (
      <React.Fragment>
        <h1 className='welcomeMessage'> {timeGreeting()}, David! ❤️ </h1>
        <div className='row'>
          <div className='questionText'>
            What did you do?
          </div>
          <div>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Tell us! <Icon type='down' />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className='row'>
          <div className='questionText'>
            How was it?
        </div>
          <div>
            <Rate allowHalf defaultValue={0} />
          </div>
        </div>
        <div className='row'>
          <div className='questionText'>
            How does your body feel?
        </div>
          <div>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">Painful</Radio.Button>
              <Radio.Button value="b">Tweaky</Radio.Button>
              <Radio.Button value="c">Sore</Radio.Button>
              <Radio.Button value="d">Tired</Radio.Button>
              <Radio.Button value="e">Average</Radio.Button>
              <Radio.Button value="f">Strong</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className='row'>
          <div className='questionText'>
            Workout notes
        </div>
          <div>
            <TextArea rows={2} />
          </div>
        </div>
        <div className='row'>
          {this.renderPage()}
          <Button type='primary' size='large' onClick={this.showModal}>Submit</Button>
          <Modal
            title="Successfully logged"
            visible={this.state.modalVisible}
            closable={true}
            onCancel={this.hideModal}
            //okButtonProps={{}}
            //cancelButtonProps={{}}
            footer={[
              <Button onClick={this.goToPlan}>
                See your plan
              </Button>,
              <Button onClick={this.goToData}>
                See your data
              </Button>
            ]}
          >
            <p className='modal'>{randomMessage()}</p>
          </Modal>
        </div>
      </React.Fragment >
    );
  }
}

export default Log;