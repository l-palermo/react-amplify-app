import { Auth } from 'aws-amplify';

export default async function () {
    try {
        await Auth.signOut();
        location.reload();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
