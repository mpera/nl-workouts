import React from 'react';
import './Today.css';
import timeGreeting from '../utilities/time-greeting.js';
import { Menu, Dropdown, Icon, Rate, Radio, Input, Button, Modal } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
const { TextArea } = Input;
const { SubMenu } = Menu;

class Today extends React.Component {
  state = { modalVisible: false };

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
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
        <h1 className='welcomeMessage'> {timeGreeting()}, Hydra! ❤️ </h1>
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
          <Button type='primary' size='large' onClick={this.showModal}>Submit</Button>
          <Modal
            title="Successfully logged!"
            visible={this.state.modalVisible}
            onOk={this.goToCalendar}
            onCancel={this.goToData}
            okButtonProps={{}}
            cancelButtonProps={{}}
            footer={[
              <Button onClick={this.goToCalendar}>
                Go to calendar
              </Button>,
              <Button onClick={this.goToData}>
                Go to data
              </Button>
            ]}
          >

          </Modal>
        </div>
      </React.Fragment >
    );
  }
}

export default Today;