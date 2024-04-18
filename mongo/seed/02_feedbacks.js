db.feedbacks.drop();
db.feedbacks.insertMany([
  {
    _id: 1,
    text: 'Mark is an excellent salesperson! He is very knowledgeable and is always willing to help.',
    reviewee_id: 2,
    reviewer_id: 1,
  },
  {
    _id: 2,
    text: 'Jane is a very talented developer. Whenever we face a problem, she always comes up with a solution.',
    reviewee_id: 3,
    reviewer_id: 1,
  },
  {
    _id: 3,
    text: 'It is a pleasure to work with Elijah. He is very professional and always delivers on time.',
    reviewee_id: 4,
    reviewer_id: 1,
  },
  {
    _id: 4,
    text: 'Jessica is a very creative designer. She always comes up with innovative ideas.',
    reviewee_id: 5,
    reviewer_id: 1,
  },
  {
    _id: 5,
    text: 'Michael is a great team player. He is always willing to help and is very supportive.',
    reviewee_id: 6,
    reviewer_id: 1,
  },
  {
    _id: 6,
    text: 'Emily is a great team player. She has a positive attitude and is always willing to help.',
    reviewee_id: 7,
    reviewer_id: 1,
  },
  {
    _id: 7,
    text: 'Trevor is an excellent salesperson! He has been a great addition to our team.',
    reviewee_id: 8,
    reviewer_id: 1,
  },
  {
    _id: 8,
    text: 'If you are looking for a great leader and very talented developer, John is the right person. He is very professional and always delivers on time.',
    reviewer_id: 8,
    reviewee_id: 1,
  },
  {
    _id: 9,
    text: 'One of the best team leaders I have worked with. John is very professional and always motivates us to do our best.',
    reviewer_id: 7,
    reviewee_id: 1,
  },
  {
    _id: 10,
    text: 'It is always a pleasure to work with John. He is very knowledgeable and is always willing to help.',
    reviewer_id: 6,
    reviewee_id: 1,
  },
  {
    _id: 11,
    text: 'John and I have worked on this project together, and I must say that he is a great leader and a very talented developer. He always comes up with innovative ideas.',
    reviewer_id: 5,
    reviewee_id: 1,
  },
  {
    _id: 12,
    text: 'This is the second time I have worked with John, and I am very impressed with his work. He is very professional and always delivers on time.',
    reviewer_id: 4,
    reviewee_id: 1,
  },
  {
    _id: 13,
    text: 'I loved working with John. He is a great team player and always has a positive attitude.',
    reviewer_id: 3,
    reviewee_id: 1,
  },
  {
    _id: 14,
    text: 'John is an excellent team leader! He is very supportive and always motivates us to do our best.',
    reviewer_id: 2,
    reviewee_id: 1,
  },
]);
