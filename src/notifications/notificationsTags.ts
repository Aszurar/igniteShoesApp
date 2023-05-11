import OneSignal from 'react-native-onesignal';

export function deleteTagUserEmail() {
  OneSignal.deleteTag('user_email:');
  OneSignal.deleteTag('user_name:');
  OneSignal.deleteTags(['user_name:', 'user_email:']);
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.sendTag('cart_items_count', itemsCount);
}
