import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path:'home',
                title:'Home',
                loadComponent: () => import('./dashboard/pages/home/home.component'),
            },
            {
                path:'user-list',
                title:'User List',
                loadComponent: () => import('./dashboard/pages/users/users.component'),
            },
            {
                path:'change-detection',
                title:'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path:'control-flow',
                title:'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path:'defer-options',
                title:'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path:'user:/id',
                title:'User View',
                loadComponent: () => import('./dashboard/pages/user/user.component'),
            },
            {
                path:'view-transition-1',
                title:'View Transition 1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
            },
            {
                path:'view-transition-2',
                title:'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
            },
            {
                path:'products',
                title:'Products',
                loadComponent: () => import('./products/product-list/product-list.component'),
            },
            {
                path:'products/:id',
                title:'Product Details',
                loadComponent: () => import('./products/product-details/product-details.component'),
            },
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full',
            }
            
        ]
    }, 
    {
        path:"",
        redirectTo:'/dashboard',
        pathMatch:'full'
    }

];
