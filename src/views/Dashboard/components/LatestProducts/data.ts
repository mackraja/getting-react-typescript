import { v1 as uuidv1 } from 'uuid';
import moment from 'moment';

import product_1 from '../../../../assets/images/products/product_1.png';
import product_2 from '../../../../assets/images/products/product_2.png';
import product_3 from '../../../../assets/images/products/product_3.png';
import product_4 from '../../../../assets/images/products/product_4.png';
import product_5 from '../../../../assets/images/products/product_5.png';

export default [
  {
    id: uuidv1(),
    name: 'Dropbox',
    imageUrl: product_1,
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuidv1(),
    name: 'Medium Corporation',
    imageUrl: product_2,
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuidv1(),
    name: 'Slack',
    imageUrl: product_3,
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuidv1(),
    name: 'Lyft',
    imageUrl: product_4,
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuidv1(),
    name: 'GitHub',
    imageUrl: product_5,
    updatedAt: moment().subtract(9, 'hours')
  }
];
