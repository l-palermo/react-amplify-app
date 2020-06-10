import { withAuthenticator } from '@aws-amplify/ui-react';

import App from './app';

export default withAuthenticator(App, {
    usernameAlias: 'email',
});
