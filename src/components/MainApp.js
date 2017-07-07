import { UserCardList } from './UserCardList'
import { StatisticsCount } from './Statistics'
import { AddUser } from './AddUser'
import { Component } from 'react'
import { SiteMenu } from './SiteMenu'
import { Footer } from './Footer'

export class MainApp extends Component{
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
			 <SiteMenu />
				{(this.props.location.pathname === "/adduser") ?
					<AddUser addNewUser={this.addUser}/> :
			 (this.props.location.pathname === "/dashboard") ?
			 	<StatisticsCount twowheeler={130}
						 car = {340}
						 health = {2335}
				/> :
			 	<UserCardList />		 
			}
			<Footer />
			</div>
		)
	}
}




