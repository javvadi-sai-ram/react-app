



class ProductModel{
           productId;
           availableSizes;
           currencyFormat;
           currencyId;
           description;
           installmentsCount;
           isFreeShipping;
           price;
           printStyle;
           title;
           imageURL
           
    constructor(item){
           this.productId=item.productId,
           this.availableSizes=item.availableSizes,
           this.currencyFormat=item.currencyFormat,
           this.currencyId=item.currencyId,
           this.description=item.description,
           this.installmentsCount=item.installmentsCount,
           this.isFreeShipping=item.isFreeShipping,
           this.price=item.price,
           this.printStyle=item.printStyle,
           this.title=item.title,
           this.imageURL=item.imageURL
    }
}

export default ProductModel;