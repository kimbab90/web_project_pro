// init.js

let itemData = [{
  itemCode: 1,
  itemName: '장물',
  bidder: 'user01',
  price: 1000,
  date: new Date(2025, 3, 20),
  image: ''
}, {
  itemCode: 1,
  itemName: '분실물',
  bidder: 'user01',
  price: 2000,
  date: new Date(2025, 3, 21),
  image: ''
}]

let userData = [{
    id: 'user01',
    pw: '1111'
  },
  {
    id: 'user02',
    pw: '2222'
  }
]

let bidData = [{
    id: "user01",
    itemCode: 1,
    date: new Date(),
    price: 1000,
    status: true
  },
  {
    id: "user02",
    itemCode: 1,
    date: new Date(),
    price: 950,
    status: false
  }
]