export default {
    base:'/MyBlog/',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Config', link: '/config/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide222',
                    items: [
                        { text: 'Index', link: '/guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' }
                    ]
                }

            ],

            '/config/': [
                {
                    text: 'Config111',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'four', link: '/config/four' },
                        { text: 'three', link: '/config/three' }
                    ]
                }
            ]
        }

    }
};