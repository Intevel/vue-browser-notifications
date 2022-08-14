export const useTestComposable = (requestOnNotify: boolean) => {
  if (window.Notification) {
    const requestPermission = () => {
      window.Notification.requestPermission()
    }

    const sendNotification = (title: string, options?: { body?: string, icon?: string, image?: string, lang?: string, badge?: string, data?: any, vibtrate?: any, renotify?: boolean, requireInteraction?: boolean, actions?: Array<{ action: string, title: string, icon: string }>, silent?: boolean }) => {
      if (requestOnNotify) {
        requestPermission()
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
