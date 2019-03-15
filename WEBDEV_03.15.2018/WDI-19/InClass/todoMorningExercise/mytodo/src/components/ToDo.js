import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <div>
               <form>
                   <input placeholder='Task' />
                   <button type='submit'> Add Task</button>
               </form>
            </div>
        );
    }
}

export default ToDo;