import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';

import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import { Redirect, Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: theme.spacing(6),
    },
    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    feedback: {
        marginTop: theme.spacing(2),
    },
}));

function SignIn() {
    const history = useHistory();
    const classes = useStyles();
    const [sent, setSent] = React.useState(false);

    const validate = values => {
        const errors = required(['email', 'password'], values);

        if (!errors.email) {
            const emailError = email(values.email, values);
            if (emailError) {
                errors.email = email(values.email, values);
            }
        }

        return errors;
    };

    const handleSubmit = (e) => {
        const url =  'https://FriendsWithBenefits--quocanh.repl.co' +'/signin';
        const options = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(e)
    };

      fetch(url, options)
        .then(response => {
          if (response.status !== 200) {
            window.alert('Incorrect user/password')
          } else {
            history.push(`/subscriptions?user=${e.email}`);
          }
        })
      setSent(true);
    };

    return (
        <React.Fragment>
            <AppAppBar />
            <AppForm>
                <React.Fragment>
                    <Typography
                        variant="h3"
                        gutterBottom
                        marked="center"
                        align="center"
                    >
                        Sign In
                    </Typography>
                    <Typography variant="body2" align="center">
                        {'Not a member yet? '}
                        <Link
                            to="/signup"
                            align="center"
                            underline="always"
                        >
                            Sign Up here
                        </Link>
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{ submitting: true }}
                    validate={validate}
                >
                    {({ handleSubmit, submitting }) => (
                        <form
                            onSubmit={handleSubmit}
                            className={classes.form}
                            noValidate
                        >
                            <Field
                                autoComplete="email"
                                autoFocus
                                component={RFTextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Email"
                                margin="normal"
                                name="email"
                                required
                                size="large"
                            />
                            <Field
                                fullWidth
                                size="large"
                                component={RFTextField}
                                disabled={submitting || sent}
                                required
                                name="password"
                                autoComplete="current-password"
                                label="Password"
                                type="password"
                                margin="normal"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback
                                            className={classes.feedback}
                                            error
                                        >
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <FormButton
                                className={classes.button}
                                disabled={submitting || sent}
                                size="large"
                                color="secondary"
                                fullWidth
                            >
                                {submitting || sent
                                    ? 'In progress…'
                                    : 'Sign In'}
                            </FormButton>
                        </form>
                    )}
                </Form>
                <Typography align="center">
                    {/*<Link
                        underline="always"
                        href="/premium-themes/onepirate/forgot-password/"
                    >
                        Forgot password?
                    </Link>*/}
                </Typography>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(SignIn);
