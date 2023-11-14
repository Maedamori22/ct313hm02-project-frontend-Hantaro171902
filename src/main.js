import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue';
import router from './router';
import makeUsersService from './services/users.service';

const app = createApp(App);
// Provide the users service to the entire application
const usersService = makeUsersService();

app.provide('$usersService', usersService);
app.use(router);
app.mount('#app');
