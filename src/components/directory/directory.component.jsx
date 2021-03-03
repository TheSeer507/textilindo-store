import React from 'react';

import './directory.styles.css';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor (){
        super();

        this.state = {
            sections: [
              {
                title: 'telas',
                imageUrl: 'https://textilindo.net/wp-content/uploads/2014/06/Satin-2.jpg',
                id: 1,
                linkUrl: 'telas'
              },
              {
                title: 'sederia',
                imageUrl: 'https://textilindo.net/wp-content/uploads/2014/06/Lana.jpg',
                id: 2,
                linkUrl: 'sederia'
              },
              {
                title: 'decoracion',
                imageUrl: 'https://textilindo.net/wp-content/uploads/2014/06/Papeldecorativo.jpg',
                id: 3,
                linkUrl: 'decoracion'
              },
              {
                title: 'fantasia',
                imageUrl: 'https://www.karati.com/wp-content/uploads/2013/08/Blog_fantasia_4-large.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'fantasia'
              },
              {
                title: 'accesorios',
                imageUrl: 'https://p0.pikist.com/photos/92/817/scholarships-glasses-wallets-accessories.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'accesorios'
              }
            ]
          };
        }
      
        render() {
          return (
            <div className='directory-menu'>
              {this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
              ))}
            </div>
          );
        }
      }
      export default Directory;
