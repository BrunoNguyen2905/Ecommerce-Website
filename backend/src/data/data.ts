import bcrypt from 'bcrypt'
export default {
  users: [
    {
      firstName: 'Nhan',
      lastName: 'Nguyen',
      email: 'thiennhan07.2016@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true
    },
    {
      firstName: 'Khoa',
      lastName: 'Bui',
      email: 'buikhoa@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false
    }
  ],
  products: [
    {
      _id: '1',
      name: 'Slimmmmm Shirt',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/p1.jpg',
      price: 60,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 10,
      description: 'new Clothes',
      countInStock: 25,
    },
    {
      _id: '2',
      name: 'Slim Fit Pants',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/d2.jpg',
      // image: {ShirtImages},
      // image: d2,
      price: 70,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 15,
      description: 'new Clothes',
      countInStock: 0,
    },
    {
      _id: '3',
      name: 'Nike Shirt',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/d2.jpg',
      // image: {ShirtImages},
      // image: p1,
      price: 80,
      brand: 'Addidas',
      rating: 4.5,
      numReviews: 15,
      description: 'new Clothes',
      countInStock: 30,
    },
    {
      _id: '4',
      name: 'Lascote Tshirt',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/d1.jpg',
      // image: d1,
      // image: {ShirtImages},
      price: 90,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 10,
      description: 'new Clothes',
      countInStock: 0,
    },
    {
      _id: '5',
      name: 'Puma Sneakers',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/p1.jpg',
      // image: d2,
      // image: {ShirtImages},
      price: 100,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 10,
      description: 'new Clothes',
      countInStock: 10,
    },
    {
      _id: '6',
      name: 'Hoodies',
      categories: ['Pants', 'BestSeller'],
      sizes: ['S, M, L, XL'],
      image: '../public/images/d1.jpg',
      // image: p1,
      // image: {ShirtImages},
      price: 110,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 10,
      description: 'new Clothes',
      countInStock: 10,
    },
  ],
}