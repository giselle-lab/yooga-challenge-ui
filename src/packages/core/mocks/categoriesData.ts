import image1 from '../../../assets/img/image1.jpeg'
import image2 from '../../../assets/img/image2.jpeg'
import image3 from '../../../assets/img/image3.jpeg'
import image4 from '../../../assets/img/image4.jpeg'
import image5 from '../../../assets/img/image5.jpeg'

export const categoriesData = [
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