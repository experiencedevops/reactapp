import { Card, Icon, Image, Button } from 'semantic-ui-react'

const iconCreator = (iconim) => {
	return '/assets/images/'+iconim;
}


export const UserCardRow = ({iconimage,fname,lname,age,ethnicity,livesin,speaks}) => (
	<Card>
    <Image src={iconCreator(iconimage)} /> 
    <Card.Content>
      <Card.Header>
	  {fname} {lname}
      </Card.Header>
      <Card.Meta>
        <span>
		   {age} yrs | {livesin}
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
		<Button color='teal'>
				Download
		</Button>
        
		 <Button color='red' animated='vertical' floated='right' >
			  <Button.Content hidden>Edit</Button.Content>
			  <Button.Content visible>
				<Icon name='edit' />
			  </Button.Content>
		</Button>
    </Card.Content>
  </Card>						

)