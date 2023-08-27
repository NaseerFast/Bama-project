

export const ValidateProps = {
  user: {
    username: { type: 'string', minLength: 1, maxLength: 20,  },
    name: { type: 'string', minLength: 1, maxLength: 50,  },
    password: { type: 'string', minLength: 8,  },
    email: { type: 'string', minLength: 1 },
    bio: { type: 'string', minLength: 0, maxLength: 160 },
  },
  post: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
  },
  aapplication: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
    firstname: { type: 'string', minLength: 4, maxLength: 20 },
    middlename: { type: 'string', minLength: 1, maxLength: 50 },
    lastname: { type: 'string', minLength: 8 },
    email: { type: 'string', minLength: 1 },
    gender: { type: 'string', minLength: 4, maxLength: 20 },
    dateofbirth: { type: 'string', minLength: 1, maxLength: 50 },
  },
  application: {

    // content: { type: 'string', minLength: 1, maxLength: 280 },
    firstname: { type: 'string', minLength: 1, maxLength: 15,  },
    // middlename: { type: 'string', minLength: 1, maxLength: 15, },
    lastname: { type: 'string', minLength: 1, maxLength: 15,  },
    // email: { type: 'string', minLength: 1 },
    gender: { type: 'string', minLength: 4, maxLength: 20,  },
    dateofbirth: { type: 'string', minLength: 1, maxLength: 50,  },
    phone: { type: 'string', minLength: 11, maxLength:11,   },
    indigenefile: { type: 'string', minLength: 1,  },
    residentialaddress: { type: 'string', minLength: 4, maxLength: 160,  },
    district: { type: 'string', },
    // landmark: { type: 'string', minLength: 1, maxLength: 50, },
    instituition: { type: 'string', minLength: 1,  },
    yearofgraduation: { type: 'string',  },
    qualification: { type: 'string', },
    course: { type: 'string', minLength: 1, maxLength: 50 },
    certificatefile: { type: 'string', minLength: 1, },
    idtype: { type: 'string', minLength: 1,  },
    idnumber: { type: 'string', minLength: 11, maxLength: 20,  },
    idfile: { type: 'string', minLength: 1,   },
  },
  comment: {
    content: { type: 'string', minLength: 1, maxLength: 280 },
  },
};
