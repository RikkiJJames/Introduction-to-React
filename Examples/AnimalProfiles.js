import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {userData: null};
  }

  loadUserData() {
    if(this.loading === true) {
      this.setState({userData: null})
    } else {
      this.fetchID = fetchUserData(this.props.username, (userData) => {
  this.setState({ userData });
});
      
    }
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.usernae !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  render() {
    const isLoading = this.state.userData === null ? true : false;
      
    let name = isLoading === true ? "Loading..." : this.state.userData.name;

    let bio = isLoading === true ? "Loading..." : this.state.userData.bio;

    let friends = isLoading === true ? [] : this.state.userData.friends;


    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture">
        {!isLoading && (<img src = {
          this.state.userData.profilePictureUrl}
          alt = ""/>)
          }
          </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}
