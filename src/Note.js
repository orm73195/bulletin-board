import React from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import Fatrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o'


class Note extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    edit(){
        this.setState( {
            editing: true
        })
    }
    remove(){
        alert('removing note')
    }

    save(){
        alert(this._newText.value)
    }
    renderForm(){
        return (
            <div className = "note">
                <form>
                    <textarea ref={input => this._newText = input}/>
                    <button onClick={this.save}><FaFloppyO /></button>
                </form>
            </div>    
        )
    }
    renderDisplay() {
        return (
            <div className ="note">
                <p> {this.props.children} </p>
                <span> 
                    <button onClick={this.edit} id="edit"><FaPencil /></button>
                    <button onClick={this.remove} id="remove"><Fatrash /></button>
                </span>
            </div>

        )
    }

    render() {
        if (this.state.editing) {
            return this.renderForm()
        } else {
            return this.renderDisplay()
        }

    }
}

export default Note