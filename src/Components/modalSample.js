import React from 'react';

import '../Stylesheets/MyModal.css';

class MyModal extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               isVisible: true,
          }
          this.style = {
               display: 'block',
               opacity: '1',
               marginTop :"150px",
          }
     }
    render () {
        return (
             <div className='modal fade' role='dialog' style={this.style}>
             <div className='modal-dialog'>
             <div className='modal-content'>
                  <div className='modal-header'>
                  </div>
                  <div className='modal-body'>
                  </div>
                  <div className='modal-footer'>
                  </div>
             </div>
             </div>
             </div>
          );
    }
}
export default MyModal;

<div className="modal fade" id="addReminderModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div className='modal-dialog'>
     <div className='modal-content'>
         <div className='modal-header'>
              <span>AddReminder</span>
              <i className="fas fa-times"></i>
         </div>
     <div className='modal-body'>
<input className='add-title-box' type='text' placeholder='Add title and time'/>
<div>
     <span className='reminder-label'>Reminder</span>
</div>
     </div>
     <div className='modal-footer'>
     </div>
     </div>
     </div>
</div>
</div>
