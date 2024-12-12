import { MenuPage } from '../../packages/ui/pages'
import image1 from '../../assets/img/image1.jpeg'
import image2 from '../../assets/img/image2.jpeg'
import image3 from '../../assets/img/image3.jpeg'
import image4 from '../../assets/img/image4.jpeg'
import image5 from '../../assets/img/image5.jpeg'




const Menu = () => {
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
            title="Meu Menu"
            items={['Pizza', 'Açai', 'Sushi']}
            categories={categoriesData}
        />
    )
}

export default Menu;