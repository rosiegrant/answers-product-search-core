export type Product = {
  rawData: {
    id: string;
    name: string;
    color?: string;
    parentProduct?: {
      entityId: string;
      name: string;
    }
    c_color?: string[];
    c_material?: string;
    c_price?: string;
    c_sizes?: string[];
    price: {
      value : number;
      currencyCode: string;
    }
    c_shape?: string;
    c_averageRating: number;
    photoGallery: {
      image: {
        url: string;
        width: number;
        height: number;
        sourceUrl: string;
      };
    }[];
    landingPageUrl?: string;
  };
};
