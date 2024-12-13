import { MenuPage } from '../../packages/ui/pages'
import image1 from '../../assets/img/image1.jpeg'
import image2 from '../../assets/img/image2.jpeg'
import image3 from '../../assets/img/image3.jpeg'
import image4 from '../../assets/img/image4.jpeg'
import image5 from '../../assets/img/image5.jpeg'




const Menu = () => {
    const storeInfos = [
        {
            "storeName": "Vila do Açaí",
            "storeLocation": "Jardim da Penha",
            "storeType": "Açaiteria",
            "distance": 6.3,
            "minimumOrderValue": 10.00,
            "workingHours": {
                "monday": "10:00 - 22:00",
                "tuesday": "10:00 - 22:00",
                "wednesday": "10:00 - 22:00",
                "thursday": "10:00 - 22:00",
                "friday": "10:00 - 22:00",
                "saturday": "10:00 - 18:00",
                "sunday": "Closed"
            },
            "estimatedDeliveryTime": "80-90",
            "deliveryMethods": [
                "Pronta entrega",
                "Prompt Delivery",
                "Uber Eats", 
                "DoorDash"
            ],
            "coupons": [
                {
                    "code": "FIDE30",
                    "description": "Fidelidade: peça 5 vezes, ganhe R$ 30",
                    "validUntil": "2024-12-31"
                }
            ]
        }
    ]
    //LoadingPage
    const categoriesData = [
        {
          title: "Melhores da casa",
          items: [
            {
              image: image1,
              name: "Açaí Tradicional",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
              price: 40.00,
              discount: {
                discountedPrice: 20.00,
                discount: "50%"
              }
            },
            {
              image: image2,
              name: "Açaí com Nutella",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
              // price: 15.00
              price: 40.00,
              discount: {
                discountedPrice: 20.00,
                discount: "50%"
              }
            }
          ]
        },
        {
          title: "Mais vendidos",
          items: [
            {
              image: image3,
              name: "Açaí com Nutella e morango",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
              price: 40.00,
              discount: {
                discountedPrice: 20.00,
                discount: "50%"
              }
            },
            {
              image: image4,
              name: "Açaí com morango",
              description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
              price: 40.00,
            }
          ]
        }
      ];
      

    return (
        <MenuPage
            storeInfos={storeInfos}
            items={['Pizza', 'Açai', 'Sushi']}
            categories={categoriesData}
        />
    )
}

export default Menu;