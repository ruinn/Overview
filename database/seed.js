const axios = require('axios');

const getPhotos = (callback) => {
  axios({
    method: 'GET',
    url:
      'https://api.unsplash.com/search/photos?per_page=30&query=travel&client_id=54008d4032d0467ec44b27e6e2ab76efbf4e6b8a449cd18ea4bf29ca9946620c',
  })
    .then(response => (
      callback(response.data.results)
    ))
    .catch((error) => {
      console.log("Couldn't get photos: ", error);
    });
};

const hostelInfo = [
  {
    name: 'Keylex',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Bamity',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Bitchip',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Home Ing',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Stim',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Flowdesk',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
    ],
  },
  {
    name: 'Transcof',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Andalax',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Tin',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Cardify',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Bytecard',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Matsoft',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Bigtax',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Subin',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Konklux',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Zontrax',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Veribet',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Sub-Ex',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Cookley',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Zontrax',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Transcof',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Daltfresh',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    reviews: [
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Temp',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Duobam',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Zontrax',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Voltsillam',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Job',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Treeflex',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Toughjoyfax',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Bitchip',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Sonair',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Konklux',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Subin',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Fintone',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Viva',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Ronstring',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Fintone',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Keylex',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Transcof',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Konklux',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    reviews: [
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Otcom',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Voltsillam',
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Tresom',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Subin',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Y-find',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Veribet',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Tempsoft',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Alpha',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Treeflex',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Ventosanzap',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Mat Lam Tam',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Kanlam',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Mat Lam Tam',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Aerified',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Subin',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    reviews: [
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Biodex',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Treeflex',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Greenlam',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Transcof',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Quo Lux',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Bamity',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Temp',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Voyatouch',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Wrapsafe',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Wrapsafe',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Trippledex',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
    ],
  },
  {
    name: 'Duobam',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Duobam',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Tres-Zap',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Stronghold',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
    ],
  },
  {
    name: 'Bigtax',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Cardify',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Ronstring',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Otcom',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 5,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Regrant',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Pannier',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Fintone',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Biodex',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Latlux',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
    ],
  },
  {
    name: 'Namfix',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
    ],
  },
  {
    name: 'Fix San',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
    ],
  },
  {
    name: 'Keylex',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Flowdesk',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    reviews: [
      {
        rating: 5,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Tres-Zap',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Tin',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    reviews: [
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Sub-Ex',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 5,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Stringtough',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Subin',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Solarbreeze',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    reviews: [
      {
        rating: 1,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 1,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
    ],
  },
  {
    name: 'Daltfresh',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    reviews: [
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Konklab',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 7,
      },
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Namfix',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    reviews: [
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 7,
      },
      {
        rating: 2,
      },
      {
        rating: 9,
      },
      {
        rating: 1,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 1,
      },
    ],
  },
  {
    name: 'Temp',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 6,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 7,
      },
      {
        rating: 1,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 10,
      },
    ],
  },
  {
    name: 'Temp',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    reviews: [
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
      {
        rating: 4,
      },
    ],
  },
  {
    name: 'Ventosanzap',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    reviews: [
      {
        rating: 3,
      },
    ],
  },
  {
    name: 'Bamity',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    reviews: [
      {
        rating: 6,
      },
      {
        rating: 1,
      },
      {
        rating: 4,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 6,
      },
      {
        rating: 3,
      },
      {
        rating: 3,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 2,
      },
      {
        rating: 2,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Wrapsafe',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    reviews: [
      {
        rating: 10,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 8,
      },
      {
        rating: 8,
      },
      {
        rating: 2,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 3,
      },
      {
        rating: 4,
      },
      {
        rating: 9,
      },
      {
        rating: 8,
      },
    ],
  },
  {
    name: 'Mat Lam Tam',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    reviews: [
      {
        rating: 6,
      },
    ],
  },
  {
    name: 'Greenlam',
    description:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    reviews: [
      {
        rating: 9,
      },
      {
        rating: 2,
      },
      {
        rating: 10,
      },
      {
        rating: 1,
      },
      {
        rating: 10,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
      {
        rating: 9,
      },
      {
        rating: 10,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 7,
      },
    ],
  },
  {
    name: 'Voltsillam',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    reviews: [
      {
        rating: 4,
      },
      {
        rating: 2,
      },
      {
        rating: 6,
      },
      {
        rating: 8,
      },
      {
        rating: 9,
      },
      {
        rating: 5,
      },
      {
        rating: 9,
      },
      {
        rating: 3,
      },
      {
        rating: 1,
      },
      {
        rating: 7,
      },
      {
        rating: 5,
      },
      {
        rating: 6,
      },
      {
        rating: 4,
      },
      {
        rating: 3,
      },
      {
        rating: 8,
      },
      {
        rating: 5,
      },
      {
        rating: 8,
      },
      {
        rating: 4,
      },
      {
        rating: 10,
      },
    ],
  },
];

const locations = [
  {
    city: 'Humble',
    country: 'United States',
  },
  {
    city: 'Tampa',
    country: 'United States',
  },
  {
    city: 'El Paso',
    country: 'United States',
  },
  {
    city: 'Houston',
    country: 'United States',
  },
  {
    city: 'Decatur',
    country: 'United States',
  },
  {
    city: 'Virginia Beach',
    country: 'United States',
  },
  {
    city: 'Seattle',
    country: 'United States',
  },
  {
    city: 'Sacramento',
    country: 'United States',
  },
  {
    city: 'Denver',
    country: 'United States',
  },
  {
    city: 'Bronx',
    country: 'United States',
  },
  {
    city: 'Camden',
    country: 'United States',
  },
  {
    city: 'Philadelphia',
    country: 'United States',
  },
  {
    city: 'Trenton',
    country: 'United States',
  },
  {
    city: 'Omaha',
    country: 'United States',
  },
  {
    city: 'Saint Paul',
    country: 'United States',
  },
  {
    city: 'Jamaica',
    country: 'United States',
  },
  {
    city: 'Fort Worth',
    country: 'United States',
  },
  {
    city: 'Kansas City',
    country: 'United States',
  },
  {
    city: 'Cincinnati',
    country: 'United States',
  },
  {
    city: 'Los Angeles',
    country: 'United States',
  },
];

hostelInfo.forEach((info) => {
  info.reviews.forEach((review) => {
    if (review.rating === 10) {
      review.topFeature = 'Cleanliness';
    } else if (review.rating === 9) {
      review.topFeature = 'Location';
    } else if (review.rating === 8) {
      review.topFeature = 'Staff';
    } else {
      review.topFeature = 'Bummer';
    }
  });
});

module.exports = {
  getPhotos,
  hostelInfo,
  locations,
};
