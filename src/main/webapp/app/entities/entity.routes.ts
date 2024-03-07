import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    data: { pageTitle: 'Students' },
    loadChildren: () => import('./student/student.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
