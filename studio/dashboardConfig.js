export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d59cc5894373b4397edf75a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-75vt6u1w',
                  apiId: '268ed830-8f47-4e9b-9cea-6ce862f3a704'
                },
                {
                  buildHookId: '5d59cc585ee418ce0213cba3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-osg4g98w',
                  apiId: 'f61a9729-39c4-47a2-ae07-d15ce61cb9bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erichodges/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-osg4g98w.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
