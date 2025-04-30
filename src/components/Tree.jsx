import React from 'react'
import MenuList from './menuList'
import './style.css'

const Tree = ({menus = []}) => {
  return (
    <>
        <div className='tree-view-container'>
            <MenuList list={menus} />
        </div>
    </>
  )
}

export default Tree
