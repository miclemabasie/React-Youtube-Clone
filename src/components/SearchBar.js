import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

 class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleSubmit = (e) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props
        onFormSubmit(searchTerm)
        e.preventDefault();
    }
    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})        
    }
     render(){
         return (
            <Paper elevation={6} style={{padding: '10px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
         )
     }
 }


 export default SearchBar