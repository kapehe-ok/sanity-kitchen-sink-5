export default {
  widgets: [
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
                  buildHookId: '5f74bff13c245b19b7f3c0e6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-5-studio',
                  apiId: '4d78f457-cb2c-4538-91ce-38eab69576d5'
                },
                {
                  buildHookId: '5f74bff19b59f7149554a56c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-5',
                  apiId: '723aee50-5ef6-43ce-af33-5e1d5541c71a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-kitchen-sink-5',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
