import React, {Component} from 'react'
import './SearchCollabs.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAllUsers, filterUsers} from '../store/actions/userActions'
import UserCard from '../UserCard/UserCard'
// import {Card} from 'semantic-ui-react'
import Filter from '../Filter/Filter'

let usersArray 
let filUsers

class SearchCollabs extends Component {

    componentDidMount(){
        this.props.getAllUsers()
    }

    handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.innerText)
        this.props.filterUsers(e.target.innerText)
    }

    render(){
        if(this.props.filUsers.length !== 0){
            filUsers = this.props.filUsers.map((user) => <UserCard key={user.id} user={user}/>)
        } else {
            usersArray = this.props.users.map((user) => <UserCard key={user.id} user={user}/>)
        }
        
        return(
            <div className='search-collaborators'>
                <Filter handleClick={this.handleClick}/>
                <div className='search-container'>
                    {filUsers ? filUsers : usersArray}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers()), 
        filterUsers: pref => dispatch(filterUsers(pref))
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users,
        filUsers: state.user.filUsers
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchCollabs))

