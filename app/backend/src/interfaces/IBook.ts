export default interface IBook {
  id?: number,
  name: string,
  author: string,
  genre?: string,
  condition?: string,
  price?: number,
  quantity: number
}