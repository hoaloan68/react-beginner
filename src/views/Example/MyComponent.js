import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    arrayJobs: [
      {id: 'job1', title: 'dev', salary: '500'},
      {id: 'job2', title: 'tester', salary: '600'}
    ]
  };

  
  render() {
    console.log('render new: ', this.state);
    return (
      <>
        

        <ChildComponent abc={this.state.arrayJobs} />
      </>
    );
  }
}

export default MyComponent;
