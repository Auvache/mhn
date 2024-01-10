import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      title: 'Welcome to Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import('../views/PageNotFound'),
    meta: {
      title: 'Requested Page Not Found on Mental Health Naps',
      metaTags: [
        {
          name: 'description',
          content: 'Requested Page Not Found on'
        }
      ]
    },
  },

  // alphabetic pages
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/about',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/all-posts',
    name: 'AllPosts',
    component: () => import('../views/AllPosts'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/all-posts',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../views/Links'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/links',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/my-story',
    name: 'MyStory',
    component: () => import('../views/MyStory'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/my-story',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/posts/:slug',
    name: 'Posts',
    component: () => import('../views/Posts'),
    props: true,
    meta: {
      title: 'Mental Health Naps Blog Posts',
      canonical: 'https://www.mentalhealthnaps.com/posts',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/sleep-scape',
    name: 'SleepScape',
    component: () => import('../views/SleepScape'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/sleep-scape',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/sleep-study',
    name: 'SleepStudy',
    component: () => import('../views/SleepStudy'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/sleep-study',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/socials',
    name: 'Socials',
    component: () => import('../views/Socials'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/socials',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/understanding-sleep-apnea',
    name: 'UnderstandingSleepApnea',
    component: () => import('../views/UnderstandingSleepApnea.vue'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/understanding-sleep-apnea',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/vision',
    name: 'Vision',
    component: () => import('../views/Vision'),
    meta: {
      title: 'About Mental Health Naps',
      canonical: 'https://www.mentalhealthnaps.com/vision',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80
      };
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const nearestWithCanonical = to.matched.slice().reverse().find(r => r.meta && r.meta.canonical);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  if(nearestWithCanonical) {
    const canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', nearestWithCanonical.meta.canonical)
    document.head.append(canonical)
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));
  next();


  let modals = document.querySelectorAll('[id$=Modal]')
  for (let i = 0; i < modals.length; i++) {
    let modalName = modals[i].id.replace('Modal','')
    closeModal(modalName)
  }
});

// for accessibility
// router.afterEach(() => {
//   document.getElementById('firstTabIndex').focus()
// })

export default router
