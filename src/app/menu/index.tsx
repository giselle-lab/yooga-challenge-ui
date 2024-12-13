import { MenuPage } from '../../packages/ui/pages'

import { storeInfos } from '../../packages/core/mocks/storeInfos'
import { categoriesData } from '../../packages/core/mocks/categoriesData'


const Menu = () => {
    return (
        <MenuPage
            storeInfos={storeInfos}
            items={['Pizza', 'Açai', 'Sushi']}
            categories={categoriesData}
        />
    )
}

export default Menu;