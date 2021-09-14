import React from 'react';

class ChildComponent extends React.Component {
  render() {
    console.log('check props: ', this.props);
    //    let name = this.props.name;

    let { abc } = this.props;
    return (
      <>
        <div className='job-list'>
          {abc.map((item, index) => {
            return (
              <div key={item.id}>
                {item.salary} -{item.id}-{item.title}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
