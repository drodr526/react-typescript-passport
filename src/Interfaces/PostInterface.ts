export interface PostInterface{ //structure for making and sending post objects without having to include post ID
    title: string,
    content: string,
    category: string,
    author: string,
    date: string,
}

export interface DatabasePostInterface { //structure for getting from database
    title: string,
    content: string,
    category: string,
    author: string,
    date: string,
    _id: string
  }