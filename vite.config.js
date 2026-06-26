import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const page = (name) => fileURLToPath(new URL(name, import.meta.url));

export default defineConfig({
  base: './',
  server: {
    allowedHosts: true,
    host: true,
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        about: page('about.html'),
        dashboardStudent: page('dashboard-student.html'),
        dashboardTeacher: page('dashboard-teacher.html'),
        home: page('home.html'),
        loginProfessor: page('login-professor.html'),
        loginStudent: page('login-student.html'),
        program: page('program.html'),
        research: page('research.html'),
        signupProfessor: page('signup-professor.html'),
        signupStudent: page('signup-student.html'),
        subject: page('subject.html')
      }
    }
  }
});
