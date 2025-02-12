// init.js

let itemData = [{
  itemCode: 1,
  itemName: '저택',
  endDate: new Date(2025, 2, 20),
  info: '내 집 마련의 꿈을 이뤄보세요',
  infoDetail: `You say it's changed
Show must go on, behave
오랜만에 옛 노래해
I'm feelin' like I never left
(That's right) I never left
But you ain't know, O.K then lights, camera
Act like you know
Don't play on me, no, we're
Airbnb, you're homeless
혼비백산-해진-미-장센 (Mise-en-scène)
도레미파시도 (Now, you know it)
두껍아 두껍아 came with the troops
뜯고 맛보고 즐기고 big bang when I shoot
King in the zoo, he gotta do what I do
One of one, not of them (Mirror)
Man in the views aimin' at you
Yeah, I'm aiming at a man, and amen, achoo
Bless you, all cleaned house, fu
Golden days are still alive
외롭다는 말하지 마
내가 있는 곳, 네가 있을 곳
The place that I belong
Home sweet home
Home sick home`,
  image: 'house_1.png'
}, {
  itemCode: 2,
  itemName: '저택',
  endDate: new Date(2025, 2, 21),
  info: '내 집 마련의 꿈을 다시 이뤄보세요',
  infoDetail: `채영이가 좋아하는 랜덤 게임, 랜덤 게임
Game start
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
Kissy face, kissy face sent to your phone, but
I'm trying to kiss your lips for real (uh-huh, uh-huh)
Red hearts, red hearts, that's what I'm on, yeah
Come give me somethin' I can feel, oh-oh-oh
Don't you want me like I want you, baby?
Don't you need me like I need you now?
Sleep tomorrow, but tonight go crazy
All you gotta do is just meet me at the
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh
아파트, 아파트, 아파트, 아파트
아파트, 아파트, uh, uh-huh, uh-huh`,
  image: 'house_2.jpg'
}, {
  itemCode: 3,
  itemName: '빈티지 링',
  endDate: new Date(2025, 2, 22),
  info: '상대방을 진정 사랑한다면 선물하세요',
  infoDetail: `You say it's changed
Show must go on, behave
오랜만에 옛 노래해
I'm feelin' like I never left
(That's right) I never left
But you ain't know, O.K then lights, camera
Act like you know
Don't play on me, no, we're
Airbnb, you're homeless
혼비백산-해진-미-장센 (Mise-en-scène)
도레미파시도 (Now, you know it)
두껍아 두껍아 came with the troops
뜯고 맛보고 즐기고 big bang when I shoot
King in the zoo, he gotta do what I do
One of one, not of them (Mirror)
Man in the views aimin' at you
Yeah, I'm aiming at a man, and amen, achoo
Bless you, all cleaned house, fu
Golden days are still alive
외롭다는 말하지 마
내가 있는 곳, 네가 있을 곳
The place that I belong
Home sweet home
Home sick home`,
  image: 'jewelry_1.jpg'
}, {
  itemCode: 4,
  itemName: '샤넬',
  endDate: new Date(2025, 2, 23),
  info: '샤넬 최고!',
  infoDetail: `You say it's changed
Show must go on, behave
오랜만에 옛 노래해
I'm feelin' like I never left
(That's right) I never left
But you ain't know, O.K then lights, camera
Act like you know
Don't play on me, no, we're
Airbnb, you're homeless
혼비백산-해진-미-장센 (Mise-en-scène)
도레미파시도 (Now, you know it)
두껍아 두껍아 came with the troops
뜯고 맛보고 즐기고 big bang when I shoot
King in the zoo, he gotta do what I do
One of one, not of them (Mirror)
Man in the views aimin' at you
Yeah, I'm aiming at a man, and amen, achoo
Bless you, all cleaned house, fu
Golden days are still alive
외롭다는 말하지 마
내가 있는 곳, 네가 있을 곳
The place that I belong
Home sweet home
Home sick home`,
  image: 'luxury_1.jpg'
}, {
  itemCode: 5,
  itemName: '루이비통',
  endDate: new Date(2025, 2, 24),
  info: '루이비통 최고!',
  infoDetail: `You say it's changed
Show must go on, behave
오랜만에 옛 노래해
I'm feelin' like I never left
(That's right) I never left
But you ain't know, O.K then lights, camera
Act like you know
Don't play on me, no, we're
Airbnb, you're homeless
혼비백산-해진-미-장센 (Mise-en-scène)
도레미파시도 (Now, you know it)
두껍아 두껍아 came with the troops
뜯고 맛보고 즐기고 big bang when I shoot
King in the zoo, he gotta do what I do
One of one, not of them (Mirror)
Man in the views aimin' at you
Yeah, I'm aiming at a man, and amen, achoo
Bless you, all cleaned house, fu
Golden days are still alive
외롭다는 말하지 마
내가 있는 곳, 네가 있을 곳
The place that I belong
Home sweet home
Home sick home`,
  image: 'luxury_2.png'
}, {
  itemCode: 6,
  itemName: '빈티지 시계',
  endDate: new Date(2025, 2, 25),
  info: '시간은 역시 시계로 봐야...',
  infoDetail: `You say it's changed
Show must go on, behave
오랜만에 옛 노래해
I'm feelin' like I never left
(That's right) I never left
But you ain't know, O.K then lights, camera
Act like you know
Don't play on me, no, we're
Airbnb, you're homeless
혼비백산-해진-미-장센 (Mise-en-scène)
도레미파시도 (Now, you know it)
두껍아 두껍아 came with the troops
뜯고 맛보고 즐기고 big bang when I shoot
King in the zoo, he gotta do what I do
One of one, not of them (Mirror)
Man in the views aimin' at you
Yeah, I'm aiming at a man, and amen, achoo
Bless you, all cleaned house, fu
Golden days are still alive
외롭다는 말하지 마
내가 있는 곳, 네가 있을 곳
The place that I belong
Home sweet home
Home sick home`,
  image: 'watch_1.jpg'
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
    id: 'user01',
    itemCode: 1,
    date: new Date(2025, 2, 9),
    price: 950,
    status: false,
    visible: true
  },
  {
    id: 'user02',
    itemCode: 1,
    date: new Date(2025, 2, 10),
    price: 1000,
    status: true,
    visible: true
  },
  {
    id: 'user02',
    itemCode: 2,
    date: new Date(2025, 2, 11),
    price: 2000,
    status: false,
    visible: true
  },
  {
    id: 'user01',
    itemCode: 2,
    date: new Date(2025, 2, 12),
    price: 2100,
    status: true,
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