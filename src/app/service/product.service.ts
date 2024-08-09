import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor() { }
  productlist:product[]= [
    {
      id: 1,
      title: "Rolls-Royce Phantom",
      price: {
        originalPrice: "500000",
        discountedPrice: "450000",
        discountPercentage: "10%"
      },
      location: "Los Angeles, CA",
      date: "2024-07-31",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/1200px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 10,000, Condition: Excellent, Life Expectancy: 10 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 2,
      title: "Toyota Camry",
      price: {
        originalPrice: "25000",
        discountedPrice: "22000",
        discountPercentage: "12%"
      },
      location: "Houston, TX",
      date: "2024-07-30",
      image: "https://www.carpro.com/hs-fs/hubfs/2022-toyota-camry-trd-feature-carprousa..png?width=1020&name=2022-toyota-camry-trd-feature-carprousa..png",
      description: "Owner Type: Second Owner, No. of KMs Spent: 50,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 3,
      title: "Bentley Continental GT",
      price: {
        originalPrice: "220000",
        discountedPrice: "200000",
        discountPercentage: "9%"
      },
      location: "Miami, FL",
      date: "2024-07-29",
      image: "https://www.team-bhp.com/forum/attachments/super-cars-imports-india/2115105d1611903761-pics-bentley-continental-gt-flying-spur-gtc-fb_img_16119035132837611.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 8,000, Condition: Excellent, Life Expectancy: 8 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 4,
      title: "Honda Accord",
      price: {
        originalPrice: "28000",
        discountedPrice: "25000",
        discountPercentage: "10%"
      },
      location: "Chicago, IL",
      date: "2024-07-28",
      image: "https://imageio.forbes.com/specials-images/imageserve/657ccd4b89679a81c750ecc3/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds",
      description: "Owner Type: Third Owner, No. of KMs Spent: 70,000, Condition: Fair, Life Expectancy: 3 years, Insurance: No coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 5,
      title: "Mercedes-Benz S-Class",
      price: {
        originalPrice: "150000",
        discountedPrice: "135000",
        discountPercentage: "10%"
      },
      location: "New York, NY",
      date: "2024-07-27",
      image: "https://img.sm360.ca/images//page/silverstar/97886/file/mercedes-benz-s-class-41632470935855.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 12,000, Condition: Excellent, Life Expectancy: 7 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 6,
      title: "Ford Mustang",
      price: {
        originalPrice: "35000",
        discountedPrice: "31500",
        discountPercentage: "10%"
      },
      location: "San Francisco, CA",
      date: "2024-07-26",
      image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/07/resize_24_frd_mst_61047-tif-1.jpeg",
      description: "Owner Type: Second Owner, No. of KMs Spent: 40,000, Condition: Good, Life Expectancy: 6 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 7,
      title: "BMW 7 Series",
      price: {
        originalPrice: "80000",
        discountedPrice: "72000",
        discountPercentage: "10%"
      },
      location: "Atlanta, GA",
      date: "2024-07-25",
      image: "https://www.slashgear.com/img/gallery/the-10-coolest-features-of-the-2023-bmw-7-series/l-intro-1657741008.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 15,000, Condition: Excellent, Life Expectancy: 6 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 8,
      title: "Nissan Altima",
      price: {
        originalPrice: "24000",
        discountedPrice: "21000",
        discountPercentage: "12.5%"
      },
      location: "Dallas, TX",
      date: "2024-07-24",
      image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_417a9cee1d0148149ee26b2f21c5c17d.webp",
      description: "Owner Type: Second Owner, No. of KMs Spent: 60,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 9,
      title: "Audi A8",
      price: {
        originalPrice: "90000",
        discountedPrice: "81000",
        discountPercentage: "10%"
      },
      location: "Seattle, WA",
      date: "2024-07-23",
      image: "https://imgctcf.aeplcdn.com/thumbs/p-nc-b-ver19/images/cars/Audi/thumb-1920-971761.jpg?q=75",
      description: "Owner Type: First Owner, No. of KMs Spent: 20,000, Condition: Excellent, Life Expectancy: 6 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 10,
      title: "Chevrolet Malibu",
      price: {
        originalPrice: "22000",
        discountedPrice: "19000",
        discountPercentage: "13.6%"
      },
      location: "Orlando, FL",
      date: "2024-07-22",
      image: "https://www.edmunds.com/assets/m/chevrolet/malibu/2016/oem/2016_chevrolet_malibu_sedan_premier_fq_oem_1_600.jpg",
      description: "Owner Type: Third Owner, No. of KMs Spent: 75,000, Condition: Fair, Life Expectancy: 3 years, Insurance: No coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 11,
      title: "Porsche Panamera",
      price: {
        originalPrice: "140000",
        discountedPrice: "125000",
        discountPercentage: "10%"
      },
      location: "Las Vegas, NV",
      date: "2024-07-21",
      image: "https://cdn.arstechnica.net/wp-content/uploads/2024/03/2025-Porsche-Panamera-first-drive-1-800x600.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 10,000, Condition: Excellent, Life Expectancy: 7 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 12,
      title: "Hyundai Sonata",
      price: {
        originalPrice: "20000",
        discountedPrice: "18000",
        discountPercentage: "10%"
      },
      location: "Phoenix, AZ",
      date: "2024-07-20",
      image: "https://di-uploads-pod27.dealerinspire.com/fairfaxhyundai/uploads/2023/09/2024-sonata-0324_16-9.webp",
      description: "Owner Type: Second Owner, No. of KMs Spent: 45,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 13,
      title: "Lexus LS",
      price: {
        originalPrice: "75000",
        discountedPrice: "67500",
        discountPercentage: "10%"
      },
      location: "Boston, MA",
      date: "2024-07-19",
      image: "https://www.topgear.com/sites/default/files/cars-car/image/2018/05/lexus-ls500-030.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 15,000, Condition: Excellent, Life Expectancy: 6 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 14,
      title: "Volkswagen Passat",
      price: {
        originalPrice: "23000",
        discountedPrice: "20000",
        discountPercentage: "13%"
      },
      location: "Denver, CO",
      date: "2024-07-18",
      image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/new_volkswagen_passat_green_front_lead.jpg?itok=pAd33EF7",
      description: "Owner Type: Second Owner, No. of KMs Spent: 55,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 15,
      title: "Maserati Quattroporte",
      price: {
        originalPrice: "100000",
        discountedPrice: "90000",
        discountPercentage: "10%"
      },
      location: "San Diego, CA",
      date: "2024-07-17",
      image: "https://assets.whichcar.com.au/image/upload/s--_5ggEys9--/ar_2.304921968787515,c_fill,f_auto,q_auto:good/c_scale,w_768/v1/archive/wheels/2016/12/06/85361/2017-Maserati-Quattroporte-driving-front.jpg",
      description: "Owner Type: First Owner, No. of KMs Spent: 12,000, Condition: Excellent, Life Expectancy: 6 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 16,
      title: "Subaru Legacy",
      price: {
        originalPrice: "24000",
        discountedPrice: "21600",
        discountPercentage: "10%"
      },
      location: "Portland, OR",
      date: "2024-07-16",
      image: "https://www.cnet.com/a/img/resize/62f7a9cc0012d1c511d9c0e70cd5fcf77aca6c4e/hub/2018/02/16/a150d2c4-8a9b-4219-b09a-558bfe417cdc/2018-subaru-legacy-2-5i-sport-1.jpg?auto=webp&fit=crop&height=1200&width=1200",
      description: "Owner Type: Second Owner, No. of KMs Spent: 50,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 17,
      title: "Jaguar XJ",
      price: {
        originalPrice: "80000",
        discountedPrice: "72000",
        discountPercentage: "10%"
      },
      location: "Austin, TX",
      date: "2024-07-15",
      image: "https://imgd.aeplcdn.com/664x374/ec/65/BE/14302/img/m/Jaguar-XJ-L-Right-Front-Three-Quarter-31020_ol.jpg?v=201711021421&q=80",
      description: "Owner Type: First Owner, No. of KMs Spent: 18,000, Condition: Excellent, Life Expectancy: 6 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 18,
      title: "Kia Optima",
      price: {
        originalPrice: "23000",
        discountedPrice: "20700",
        discountPercentage: "10%"
      },
      location: "Philadelphia, PA",
      date: "2024-07-14",
      image: "https://hips.hearstapps.com/autoweek/assets/s3fs-public/10723_2016_optima_sxl_2_0_turbo.jpg?resize=980:*",
      description: "Owner Type: Second Owner, No. of KMs Spent: 60,000, Condition: Good, Life Expectancy: 5 years, Insurance: Partial coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 19,
      title: "Tesla Model S",
      price: {
        originalPrice: "100000",
        discountedPrice: "90000",
        discountPercentage: "10%"
      },
      location: "San Jose, CA",
      date: "2024-07-13",
      image: "https://www.topgear.com/sites/default/files/2023/05/WhatsApp%20Image%202023-05-04%20at%2015.53.19.jpeg",
      description: "Owner Type: First Owner, No. of KMs Spent: 10,000, Condition: Excellent, Life Expectancy: 8 years, Insurance: Full coverage",
      pflag: false,
      quantity:0
    },
    {
      id: 20,
      title: "Mazda6",
      price: {
        originalPrice: "25000",
        discountedPrice: "22500",
        discountPercentage: "10%"
      },
      location: "Columbus, OH",
      date: "2024-07-12",
      image: "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2020/11/029A0402-1.jpg",
      description: "Owner Type: Third Owner, No. of KMs Spent: 70,000, Condition: Fair, Life Expectancy: 4 years, Insurance: No coverage",
      pflag: false,
      quantity:0
    }
  ];

  getproductdata(){
    return  of(this.productlist);
  }

  productbyId(pid:any){
    return this.productlist.find((data)=>data.id==pid);
  }
  
 
  
}
