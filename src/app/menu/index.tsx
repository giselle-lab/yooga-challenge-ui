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
              description: "Açaí com banana e granola.",
              price: "R$ 19,90"
            },
            {
              image: image2,
              name: "Açaí com Nutella",
              description: "Açaí com Nutella e morango.",
              price: "R$ 25,90"
            }
          ]
        },
        {
          title: "Mais vendidos",
          items: [
            {
              image: image3,
              name: "Tapioca de Frango",
              description: "Tapioca recheada com frango e queijo.",
              price: "R$ 15,90"
            },
            {
              image: image4,
              name: "Tapioca de Chocolate",
              description: "Tapioca recheada com chocolate e leite condensado.",
              price: "R$ 12,90"
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