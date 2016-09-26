import React, { PropTypes } from 'react';

require('./AppSidebar.scss');

const AppSidebar = () => {
  const sidebarItems = [
    {
      name: 'Home',
    },
    {
      name: 'About',
    },
    {
      name: 'More',
      subItems: [
        {
          name: 'SubItem1',
        },
        {
          name: 'SubItem2',
        }
      ]
    }
  ]
  return (
    <div className='pgSidebar'>
    {/* //  ng-className='{ 'is-active': showSidebar }'> */}

      <ul className='pgSidebar__list'>
        {sidebarItems.map((item, index) => {
          return (
            <li className='pgSidebar__list__item' key={index}>
              {item.name}
              {
                item.subItems &&
                <ul className='pgSidebar__sublist'>
                  {item.subItems.map((subItem, subItemIndex) => {
                    return (
                      <li className='pgSidebar__sublist__item' key={subItemIndex}>
                        {subItem.name}
                      </li>
                    );
                  })}
                </ul>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppSidebar;