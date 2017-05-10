import React, {Component} from 'react';
import {connect} from 'react-redux';
import I18n from 'react-native-i18n';
import {isFetching, didInvalidate} from './../../selectors/auth';
import {loginRequest} from './../../state/auth/actions';
import {View} from 'react-native';
import ActionBar from './../../components/action-bar/ActionBar';
import ActionLink from './../../components/action-link/ActionLink';
import Button from '../../components/button/Button';
import InputField from '../../components/input-field/InputField';
import styles from './style';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '130p80056', //'500p150551',
			password: '123456'
		};
	}

	render() {
		const {isFetching, didInvalidate, loginRequest, navigation} = this.props;
		const loginButtonState = isFetching ? Button.state.loading : didInvalidate ? Button.state.failure : Button.state.default;

		const userNameOrEmailText = I18n.t('login.usernameOrEmail');
		const passwordText = I18n.t('login.password');
		const loginText = I18n.t('login.login');
		const resetPasswordText = I18n.t('login.resetPassword');

		return (
			<View style={styles.container}>
				<View style={styles.contentContainer}>
					<InputField label={userNameOrEmailText}
					            value={this.state.username}
					            onChangeText={ text => this.setState({username: text}) }/>
					<InputField label={passwordText}
					            secureTextEntry={true}
					            value={this.state.password}
					            onChangeText={ text => this.setState({password: text}) }/>
				</View>
				<ActionBar >
					<View style={styles.actionLinkContainer}>
						<ActionLink text={resetPasswordText} onPress={() => navigation.navigate('ResetPassword')}/>
					</View>

					<View style={styles.buttonContainer}>
						<Button state={loginButtonState}
						        appearance={Button.appearance.primary}
						        text={loginText}
						        iconFamily={Button.iconFamily.login}
						        onPress={() => loginRequest(this.state)}/>
					</View>
				</ActionBar>
			</View>
		)
	}
}


const mapStateToPros = (state) => ({
	isFetching: isFetching(state),
	didInvalidate: didInvalidate(state),
});

const mapDispatchToProps = {
	loginRequest,
};

export default connect(mapStateToPros, mapDispatchToProps)(Login);
