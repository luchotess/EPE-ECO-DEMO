export class ProductLabel {
    title: string = '';
    color: string = '';
}

export class ProductPrice {
    old: number = 0;
    actual: number = 0;
    offer: number = 0;
    single: number = 0;
    singlePather: number = 0;
}

export class ProductImages {
    featured: ProductImage = new ProductImage();
    images: ProductImage[] = [];
    thumbnails: ProductImage[] = [];
}

export class ProductImage {
    title: string = '';
    type: 'featured' | 'image' | 'thumbnail' = 'image';
    url: string = '';
}

export class ProductCategory {
    title: string = '';
    images: any;
    url: string = '';
    id: string = '';
    parentId: string = '';
    featured: boolean = false;
}

export class Product {
    id: string = '';
    url: string = '';
    featured: boolean = false;
    booking: boolean = false;
    availableToSell: boolean = false;
    title: string = '';
    categoriesArray: ProductCategory[] = [];
    categories: any = [];
    description: string = '';
    specs: string = '';
    duration: string = '';
    infoTabs: any = {};
    labels: ProductLabel[] = [];
    price: ProductPrice = new ProductPrice();
    images: ProductImages = new ProductImages();
    stock: number;
    meta: any = {};
    schedule: any = {};
    isBundle: boolean = false;
    bundleParentTitle: string = '';
    bundleParentId: string = '';
    bundleItems: Product[] = [];
    questions: any[] = [];
    variations: any[];
}

export class CartProduct {
    item: Product;
    qty: number = 0;
}

export class ShippingAddress {
    name: string = '';
    lastname: string = '';
    email: string = '';
    address: string = '';
    district: string = 'Ancón';
    department: string = 'Lima';
    country: string = 'Perú';
    phone: string = '';
    shippingMethod: string = 'recojo-tienda';
    dni: string = '';
    main?: boolean;
}


