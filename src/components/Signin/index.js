import React from "react";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./SigninElements";

const SignIn = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to="/">dolla</Icon>
					<FormContent>
						<Form>
							<FormH1>Sign in to your Account</FormH1>
							<FormLabel htmlFor="for">E-Mail</FormLabel>
							<FormInput type="email" required />

							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput type="password" required />

							<FormButton type="submit">Continue</FormButton>
							<Text>Forgot Password</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default SignIn;
