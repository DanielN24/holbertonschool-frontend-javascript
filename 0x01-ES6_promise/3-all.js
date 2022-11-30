import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = 'Signup system offline';
  return Promise.all([uploadPhoto(), createUser()]).then((result) => {
    const uploadPhotoBody = result[0].body;
    const createUserfirstName = result[1].firstName;
    const createUserlastName = result[1].lastName;

    console.log(`${uploadPhotoBody} ${createUserfirstName} ${createUserlastName}`)
  }).catch((error) => {
    console.log('Signup system offline')
  })
}
