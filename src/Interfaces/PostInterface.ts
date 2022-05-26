export interface PostInterface{ //structure for making and sending user objects without having to include user ID
    title: string,
    description: string,
    category: string,
    author: string,
    date: string,
}

export interface DatabasePostInterface { //structure for getting from database
    title: string,
    description: string,
    category: string,
    author: string,
    date: string,
    _id: string
  }