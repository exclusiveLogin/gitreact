import React, {Component} from 'react';
import './UserCard.css';

class UserCard extends Component {
    constructor(props){
        super(props);
        this.avatarStyle = {
            backgroundImage: 'url(' + props.data.avatar_url + ')'
        }
    }
    render(){
        return (
            <div className="userCard">
                <div className="avatar" style={this.avatarStyle}></div>
                <div className="description">
                    <h2><small>Login: </small>{this.props.data.login}</h2>
                    <p className="url"><a target='_blank' href={this.props.data.html_url}>{this.props.data.html_url}</a></p> 
                    <p className="score">Score: {this.props.data.score}</p> 
                </div>
            </div>
        );
    }
}
export default UserCard;