import React, { Component } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3003'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        this.getPost()
    }

    getPost() {

        const id = this.props.match.params.id
        axios.get(baseURL + '/feeds/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <img src={this.state.post.image} />
                <h5>Likes: {this.state.post.likes}</h5>
                <h3>Title: {this.state.post.description} </h3>
            </div>
        )
    }
}