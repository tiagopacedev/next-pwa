import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js PWA',
    short_name: 'Next.js PWA',
    description:
      'Explore and test modern Progressive Web App capabilities with real-world examples',
    start_url: '/',
    display: 'standalone',
    background_color: '#0000',
    theme_color: '#0000',
    id: 'v01',
    dir: 'ltr',
    display_override: ['window-controls-overlay'],
    lang: 'en-US',
    orientation: 'portrait',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    shortcuts: [
      {
        name: 'File Handling',
        short_name: 'Files',
        description: 'Open and save files directly from the web app',
        url: '/features/file-handling',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }]
      },
      {
        name: 'Local',
        short_name: 'Local',
        description: 'Manage',
        url: '/features/local-storage',
        icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }]
      }
    ],
    protocol_handlers: [
      {
        protocol: 'web+pwa',
        url: '/features/protocol-handler?url=%s'
      }
    ],
    file_handlers: [
      {
        action: '/features/file-handling',
        accept: [
          {
            'image/jpeg': ['.jpg', '.jpeg']
          },
          {
            'image/png': ['.png']
          }
        ]
      }
    ],
    share_target: {
      action: '/features/share-target',
      method: 'get',
      enctype: 'application/x-www-form-urlencoded',
      title: 'title',
      text: 'text',
      url: 'url',
      files: [
        {
          name: 'file',
          accept: ['.txt']
        }
      ],
      params: [
        {
          name: 'title',
          value: 'title',
          required: true
        },
        {
          name: 'text',
          value: 'text',
          required: true
        },
        {
          name: 'url',
          value: 'url',
          required: false
        }
      ]
    },
    prefer_related_applications: false,
    related_applications: [
      {
        platform: 'play',
        url: 'https://play.google.com/store/apps/details?id=com.twitter.android',
        id: 'com.twitter.android'
      }
    ],
    scope: '/'
  }
}
