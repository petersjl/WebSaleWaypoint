import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default class App extends React.Component {
	render() {
		return <div className="App p-5">
			<Container>
				<Card className="mx-auto" style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of
							the card's content.
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Container>
		</div>
	}
}
