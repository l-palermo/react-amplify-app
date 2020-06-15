import { Auth } from 'aws-amplify';

export default async function () {
    try {
        await Auth.signOut();
        sessionStorage.clear();
        location.reload();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
