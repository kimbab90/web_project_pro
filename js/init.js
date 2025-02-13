// init.js

let itemData = [{
  itemCode: 1,
  itemName: 'RYZEN 7',
  endDate: new Date(2025, 2, 20),
  info: 'AMD 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '1.jpg'
}, {
  itemCode: 2,
  itemName: 'RYZEN 9',
  endDate: new Date(2025, 2, 21),
  info: 'AMD 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '2.jpg'
}, {
  itemCode: 3,
  itemName: 'intel i5',
  endDate: new Date(2025, 2, 22),
  info: '인텔 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '3.jpg'
}, {
  itemCode: 4,
  itemName: 'intel i7',
  endDate: new Date(2025, 2, 23),
  info: '인텔 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '4.jpg'
}, {
  itemCode: 5,
  itemName: 'RTX 5080 MASTER',
  endDate: new Date(2025, 2, 24),
  info: 'NVIDIA 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '5.jpg'
}, {
  itemCode: 6,
  itemName: 'RTX 5080 MASTER ICE',
  endDate: new Date(2025, 2, 25),
  info: 'NVIDIA 최고!',
  infoDetail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  image: '6.jpg'
}]

let userData = [{
    id: 'user00',
    pw: '0000',
    grade: 'admin'
  }, {
    id: 'user01',
    pw: '1111',
    grade: 'user'
  },
  {
    id: 'user02',
    pw: '2222',
    grade: 'user'
  }
]

let bidData = [{
    id: 'user01',
    itemCode: 1,
    date: new Date(2025, 2, 13),
    price: 1100,
    status: true,
    visible: true
  },
  {
    id: 'user02',
    itemCode: 1,
    date: new Date(2025, 2, 13),
    price: 1000,
    status: false,
    visible: true
  },
  {
    id: 'user02',
    itemCode: 2,
    date: new Date(2025, 2, 12),
    price: 2200,
    status: true,
    visible: true
  },
  {
    id: 'user01',
    itemCode: 2,
    date: new Date(2025, 2, 12),
    price: 2100,
    status: false,
    visible: true
  },
  {
    id: 'user00',
    itemCode: 3,
    date: new Date(2025, 2, 12),
    price: 1000,
    status: true,
    visible: true
  },
  {
    id: 'user00',
    itemCode: 4,
    date: new Date(2025, 2, 12),
    price: 1000,
    status: true,
    visible: true
  },
  {
    id: 'user00',
    itemCode: 5,
    date: new Date(2025, 2, 12),
    price: 1000,
    status: true,
    visible: true
  },
  {
    id: 'user00',
    itemCode: 6,
    date: new Date(2025, 2, 12),
    price: 1000,
    status: true,
    visible: true
  }
]