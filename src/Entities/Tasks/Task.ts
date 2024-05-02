export interface Task {
  title:string,
  description:string,
  date:any
  status:'pending' | 'inProgress' | 'completed'
  id:string
}