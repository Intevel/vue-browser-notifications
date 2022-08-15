# 💬 vue-browser-notifications

Easy to use Vue 3 composable for managing browser notifications

- 🧩 **TypeScript** Support
- 🌐 **Vue 3** Support
- ✅ Send & Close Browser Notifications

## 📋 Installation

```
yarn add vue-browser-notifications

npm install vue-browser-notifications
```

## 🔗 Options

```ts
useNotifications(requestOnNotify: boolean, options?: NotificationOptions)
```

**`requestOnNotify`**
- Default: `true`
- Will request permissions everytime `sendNotification` is executed

**`options`**
- *Optional*
- Type: [NotificationOptions](https://github.com/Intevel/vue-browser-notifications/blob/master/src/types/index.d.ts#L1)
- Will override options on `sendNotifications`, can be used for global Notification settings like Icons.

## 💻 Example

```ts
<script setup lang="ts">
import { useTestComposable } from '../src/index'
const { requestPermission, sendNotification } = useTestComposable(true, { icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'})

sendNotification('Hello World', { body: 'Hallo Welt' })
</script>
```
## 💚 License

MIT License - Conner Luka Bachmann
