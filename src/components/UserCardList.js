import { Component } from 'react'
import { UserCardRow } from './UserCardRow'
import { Card, Container, Menu, Icon, Label,Dropdown, Divider,Button, Grid,List,Input } from 'semantic-ui-react'
import axios from 'axios'
import _ from 'lodash'

export class UserCardList extends Component {

    constructor(props) {
        super(props)
        this.state = {
			users:[],
		}
		
		
		this.sortBy = this.sortBy.bind(this)
    }
	
	componentDidMount() {
		axios.get('http://localhost:4000/user')
		  .then(response => this.setState({users:response.data}))
		  .catch(error => console.log(error));
			
    }
	
	sortBy(e,data) {
		this.setState({
			users: _.orderBy(this.state.users, [data.value])
		})
	}
	
   
    render() {
    	const { users } = this.state
		const options = [
				{ key: 'fname', text: 'Name', value: 'fname' },
				{ key: 'ethnicity', text: 'Ethnicity', value: 'ethnicity' },
				{ key: 'age',  text: 'Age', value: 'age' },
				{ key: 'livesin',  text: 'Lives In', value: 'livesin' }
			]
        
		return (
		
		
           <Container textAlign='right'>
				  <Grid>
					<Grid.Column width={10} textAlign='left'>
					    <Input fluid icon='search' placeholder='Search...' />
					</Grid.Column>
				  <Grid.Column width={6}>
						 <Menu compact>
						  <Button.Group color='teal'>
							<Button ><Icon name='sort' />Sort By</Button>
							<Dropdown options={options} floating button className='icon' onChange={this.sortBy} />
						  </Button.Group>
				  
						
				  </Menu>
					</Grid.Column>
				  </Grid>
				 
				  
				  <Divider />
			 
				  <Card.Group itemsPerRow={5}>
						{users.map((user, i) =>
							<UserCardRow key={i}
									   {...user}
									  />	
							)}
				 </Card.Group>
				 
			</Container>
        )
    }
}