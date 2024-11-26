import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

export default class ExchangeApi {
  constructor(collection) {
    this.collection = collection;
  }

  getData = async (id) => {
    const docRef = doc(db, this.collection, id.toString());
    console.log(id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  /*  sendData = async () => {
    const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
  
    for (const product of data.products) {
      await addDoc(collection(db, 'products'), product);
    }
  
    console.log('Firestore populated successfully');
  };

 */
  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}
