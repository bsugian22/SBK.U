import { createContext } from 'react'

// 메뉴추가
const MenuContext = createContext({
   state: { menu: false, subMenu: 'sports', searchBar: false, rightMenu: false, interMenu: 'inter-tab-1', detailMenu: false },
   actions: {
      setMenu: () => {},
      setSubMenu: () => {},
      setSearchBar: () => {},
      setRightMenu: () => {},
      setinterMenu: () => {},
      setdetailMenu: () => {},
   },
})

export default MenuContext
