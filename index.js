import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
class ToDolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return ( <
            div >
            <
            div > < button onClick = {
                (event) => this.add(event)
            } > Add < /button></div >
            <
            div >
            ToDo List: {
                this.state.items.map((record, index) => {
                    return ( <
                        table >
                        <
                        tr key = { record.index } >
                        <
                        td > < input id = "Name"
                        value = { record.Name }
                        /> </td >
                        <
                        td > < button onClick = {
                            (event) => this.remove(event, record, index)
                        } > Remove < /button></td >
                        <
                        /tr> < /
                        table >
                    )
                })
            }

            <
            /div> < /
            div >
        )
    }

    onDataChange(e) {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    add(e) {
        let rows = this.state.items;
        rows.push({});
        this.setState({ items: rows })
    }

    remove(e, record, index) {
        console.log(record)
        console.log(index)
        let rows = this.state.items;
        rows.splice(index, 1);
        this.setState({ items: rows })
    }

}


ReactDOM.render( < ToDolist / > , document.querySelector("#app"))