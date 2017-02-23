const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': {
        page: '/',
        query: {
          title: "IMS Lab"
        }
      },
      '/en': {
        page: '/',
        query: {
          title: "IMS Lab",
          lang: 'en' 
        }
      },
      '/research': {
        page: '/research',
        query: {
          title: "研究 - IMS Lab"
        }
      },
      '/en/research': {
        page: '/research',
        query: {
          title: "Research - IMS Lab",
          lang: 'en'
        }
      },
      '/professor': {
        page: '/professor',
        query: {
          title: "指導教授 - IMS Lab"
        }
      },
      '/en/professor': {
        page: '/professor',
        query: {
          title: "Professor - IMS Lab",
          lang: 'en'
        }
      },
      '/student': {
        page: '/student',
        query: {
          title: "學生 - IMS Lab"
        }
      },
      '/en/student': {
        page: '/student',
        query: {
          title: "Students - IMS Lab",
          lang: 'en'
        }
      },
      '/alumni': {
        page: '/alumni',
        query: {
          title: "學成下山 - IMS Lab"
        }
      },
      '/en/alumni': {
        page: '/alumni',
        query: {
          title: "Alumni - IMS Lab",
          lang: 'en'
        }
      },
      '/honor': {
        page: '/honor',
        query: {
          title: "榮譽 - IMS Lab"
        }
      },
      '/en/honor': {
        page: '/honor',
        query: {
          title: "Honors - IMS Lab",
          lang: 'en'
        }
      },
      '/resource': {
        page: '/resource',
        query: {
          title: "相關資源 - IMS Lab"
        }
      },
      '/en/resource': {
        page: '/resource',
        query: {
          title: "Resource - IMS Lab",
          lang: 'en'
        }
      },
      '/contact': {
        page: '/contact',
        query: {
          title: "聯絡我們 - IMS Lab"
        }
      },
      '/en/contact': {
        page: '/contact',
        query: {
          title: "Contact - IMS Lab",
          lang: 'en'
        }
      }
    }
  }
});
