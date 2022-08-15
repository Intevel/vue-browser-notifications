import { NotificationOptions } from './types'

export const useTestComposable = (requestOnNotify: boolean) => {
  if (window.Notification) {
    const requestPermission = () => {
      window.Notification.requestPermission()
    }

    const sendNotification = (title: string, options?: NotificationOptions) => {
      if (requestOnNotify && Notification.permission !== 'granted') {
        return requestPermission()
      }
      const n = new Notification(title, options)
      return n
    }

    const closeNotification = (n: Notification) => {
      n.close()
    }
    return { requestPermission, sendNotification, closeNotification }
  }
}
