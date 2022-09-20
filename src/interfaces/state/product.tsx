export interface IProductState {
  productList: IProduct[];
  openDialog: boolean,
  productEdit:IProduct
}

export interface IProduct {
  id: number;
  name: string;
  description: string;  
  categoryId: number;  
}
