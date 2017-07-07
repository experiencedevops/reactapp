import { Statistic, Label, Divider, Container } from 'semantic-ui-react'

const calcVisit = (twowheeler,car,health)  =>  twowheeler+car+health;
	

export const StatisticsCount = (props) =>  (	
			<Container>
				<Label color="blue" size="huge">Policies Issued by Category</Label>
				<Statistic.Group>
					  <Statistic>
						<Statistic.Value>{props.twowheeler}</Statistic.Value>
						<Statistic.Label>Two Wheeler</Statistic.Label>
					  </Statistic>
					  <Statistic>
						<Statistic.Value>{props.car}</Statistic.Value>
						<Statistic.Label>Car</Statistic.Label>
					  </Statistic>
					   <Statistic>
						<Statistic.Value>{props.health}</Statistic.Value>
						<Statistic.Label>Health</Statistic.Label>
					  </Statistic>
				</Statistic.Group>
				<Divider />
				 <Statistic color="red">
					  <Statistic.Value>{calcVisit(
							props.twowheeler, 
							props.car,
							props.health
						)}</Statistic.Value>
					  <Statistic.Label>Total Policies Issued</Statistic.Label>
				 </Statistic>
			</Container>
)