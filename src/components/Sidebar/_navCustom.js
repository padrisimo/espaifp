export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Nuevo',
      url: '/forms',
      icon: 'icon-note',
      children: [
        {
          name: 'Cliente',
          url: '/dashboard',
          icon: 'icon-note'
        },
        {
          name: 'Trabajador',
          url: '/dashboard',
          icon: 'icon-note'
        },
        {
          name: 'Oferta',
          url: '/dashboard',
          icon: 'icon-note'
        },
      ]
    },
    {
      name: 'Mapa de Ofertas',
      url: '/google-maps',
      icon: 'icon-map'
    },
    {
      name: 'Email',
      url: '/ui-kits/email',
      icon: 'icon-speech',
      children: [
        {
          name: 'Inbox',
          url: '/ui-kits/email/inbox',
          icon: 'icon-speech'
        },
        {
          name: 'Message',
          url: '/ui-kits/email/message',
          icon: 'icon-speech'
        },
        {
          name: 'Compose',
          url: '/ui-kits/email/compose',
          icon: 'icon-speech'
        }
      ]
    },
    {
      name: 'Facturas',
      url: '/ui-kits/invoicing/invoice',
      icon: 'icon-pencil'
    }
  ]
};
