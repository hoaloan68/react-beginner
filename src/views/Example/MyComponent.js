import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'thanh',
  };

  handleClickButton = () => {
    alert('click me');
  };

  handleOnChange = (event) => {
    console.log(event.target.value, 'event target: ',event.target,'event object: ' ,event);
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let name1 = 'thanh';
    return (
      <>
        {console.log('my name ', name1)}
        hello my com {name1}
        hello {this.state.name}
        <div className='btn'>
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
        <div>
          <input
            type='text'
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          ></input>
        </div>
      </>
    );
  }
}

export default MyComponent;
