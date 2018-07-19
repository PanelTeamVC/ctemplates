import { Routes, RouterModule } from '@angular/router';

export const HOME_ROUTES: Routes = [
    {
        path: 'home-layout',
        loadChildren: './pages/home-layout-page/home-layout-page.module#HomeLayoutPagesModule'
    },
    {
        path: 'changelog',
        loadChildren: './changelog/changelog.module#ChangeLogModule'
    },
    {
        path: 'components',
        loadChildren: './components/ui-components.module#UIComponentsModule'
    },
];
