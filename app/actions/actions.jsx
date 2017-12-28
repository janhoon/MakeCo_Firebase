import firebase, {firebaseRef} from 'app/firebase'

export var startAddItem = () => {

}

export var addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item
  }
}
