export function getPosts () {
  const posts = []
  for (let i = 0; i < 20; i += 1) {
    posts.push({
      _id: i,
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque, risus sit amet blandit molestie, nunc tellus elementum sem, eu condimentum odio nibh quis arcu. Etiam consectetur libero et lectus ultricies, sed convallis nisl rutrum. Nunc a dolor quis tortor congue facilisis quis quis magna. Nulla facilisi. Nulla cursus tellus felis, varius venenatis sapien vulputate nec. Vestibulum vel lacus dignissim risus iaculis malesuada. Sed accumsan sem in mi ornare luctus. Donec nec odio porttitor, sollicitudin mi non, rutrum justo. Pellentesque eu ultricies erat, et posuere sem. Ut ac mi vitae ipsum rutrum posuere. Nam dignissim pellentesque ipsum, et semper nibh pellentesque nec. Etiam eleifend, libero sit amet ultricies ullamcorper, urna augue dictum odio, id ultricies ligula odio nec ex.',
      images: ['https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg'],
      user: {
        image: 'https://www.shareicon.net/data/128x128/2016/07/26/802026_man_512x512.png',
        name: 'Steve Sanders'
      },
      tags: [
        {
          _id: i,
          name: 'Sobremesas'
        }
      ]
    })
  }

  return posts
}
