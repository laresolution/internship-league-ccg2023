/*  
    This function generates a random string from characters string of the specified length.
*/

export function generateUUID(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let uuid = '';
  
    for (let i = 0; i < length; i++) {
      uuid += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return uuid;
  }
  