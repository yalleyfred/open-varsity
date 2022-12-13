import App from '@/app';
import AuthRoute from '@routes/auth.route';
import AdminAuthRoute from '@routes/admin.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@/routes/students.route';
import CourseRoute from '@routes/course.route';
import TopicRoute from '@routes/topics.route';
import validateEnv from '@utils/validateEnv';
import { DB } from './Database';

validateEnv();
DB();

const app = new App([ new IndexRoute(), new UsersRoute(), new AuthRoute(), new AdminAuthRoute(), new CourseRoute(), new TopicRoute()]);

app.listen();
