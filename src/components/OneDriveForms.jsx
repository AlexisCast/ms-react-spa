import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function OneDriveForms() {
	const [title, setTitle] = useState("");
	const [textArea, setTextArea] = useState("");

    const [title1, setTitle1] = useState("");
	const [textArea1, setTextArea1] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("res");
	};

    const handleSubmit1 = (event) => {
		event.preventDefault();
		console.log("res1");
	};

	const handleChange = (setState) => (e) => {
		setState(e.target.value);
	};

    const handleChange1 = (setState) => (e) => {
		setState(e.target.value);
	};

	return (
		<Container>
			<Row xs={1} md={2} lg={2}>
				<Col>
					<Form className="form_conatiner" onSubmit={handleSubmit}>
						<Form.Group className="form_container__group">
							<Form.Label column="lg">Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Title"
								value={title}
								onChange={handleChange(setTitle)}
							/>
						</Form.Group>

						<Form.Group className="form_container__group">
							<Form.Label column="lg">Text Area</Form.Label>
							<Form.Control
								as="textarea"
								aria-label="With textarea"
								placeholder="Enter Title"
								value={textArea}
								onChange={handleChange(setTextArea)}
							/>
						</Form.Group>
						<div className="btn_container">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</Form>
				</Col>
				<Col>
					<Form className="form_conatiner" onSubmit={handleSubmit1}>
						<Form.Group className="form_container__group">
							<Form.Label column="lg">Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Title"
								value={title1}
								onChange={handleChange1(setTitle1)}
							/>
						</Form.Group>

						<Form.Group className="form_container__group">
							<Form.Label column="lg">Text Area</Form.Label>
							<Form.Control
								as="textarea"
								aria-label="With textarea"
								placeholder="Enter Title"
								value={textArea1}
								onChange={handleChange1(setTextArea1)}
							/>
						</Form.Group>
						<div className="btn_container">
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
