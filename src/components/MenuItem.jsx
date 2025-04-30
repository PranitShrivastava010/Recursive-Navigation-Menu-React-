import React, { useState } from 'react'
import MenuList from './menuList'
import { FaMinus, FaPlus } from 'react-icons/fa'

const MenuItem = ({item}) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})


    function handleToggleChildern(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
        })
    }

  return (
    <>
        <li>
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ? <span onClick={()=>handleToggleChildern(item.label)}>
                        {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
                    </span> : null
                }
                
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null
            }
        </li>
    </>
  )
}

export default MenuItem
