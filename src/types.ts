export type Product = {
  rawData: {
    id: string;
    name: string;
    c_color?: string[];
    c_material?: string;
    c_price?: string;
    price: {
      value : number;
      currencyCode: string;
    }
    c_shape?: string;
    photoGallery: {
      image: {
        url: string;
        width: number;
        height: number;
        sourceUrl: string;
      };
    }[];
  };
};
