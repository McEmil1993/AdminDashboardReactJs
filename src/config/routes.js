export const ROUTES = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'ChartBarIcon',
      component: 'Dashboard',
      showInNav: true
    },
    {
        path: '/users',
        name: 'Users',
        icon: 'UsersIcon',
        component: 'Users',
        showInNav: true
      },
      {
        path: '/settings',
        name: 'Settings',
        icon: 'CogIcon',
        component: 'Settings',
        showInNav: true
      },
      {
        path: '/profile',
        name: 'Profile',
        icon: 'UserIcon',
        component: 'Profile',
        showInNav: false
      },
    {
      category: 'Content',
      items: [
        
        {
          path: '/products',
          name: 'Products',
          icon: 'ShoppingBagIcon',
          component: 'Products',
          showInNav: true
        }
      ]
    },
    // {
    //   category: 'Settings',
    //   items: [
        
        
    //   ]
    // }
  ];
  
  // Icon mapping
  export const ICON_MAP = {
    ChartBarIcon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    UsersIcon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    ShoppingBagIcon: 'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    CogIcon: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0a7.5 7.5 0 0115 0',
    UserIcon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
  };
  
  // Helper function to get all routes for routing
  export const getAllRoutes = () => {
    const routes = [];
    
    ROUTES.forEach(item => {
      if (item.path) {
        // Standalone route
        routes.push(item);
      } else if (item.items) {
        // Category with items
        routes.push(...item.items);
      }
    });
    
    return routes;
  };
  
  // Helper function to get navigation items for sidebar
  export const getNavItems = () => {
    const navItems = [];
    
    ROUTES.forEach(item => {
      if (item.path && item.showInNav) {
        // Standalone route for sidebar
        navItems.push({
          ...item,
          isStandalone: true
        });
      } else if (item.category && item.items) {
        // Category with items
        navItems.push({
          ...item,
          isCategory: true
        });
      }
    });
    
    return navItems;
  };
  