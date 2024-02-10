import React from 'react'
import { Table } from 'antd';
import { useCrypto} from './Header';

const columns = [
  {
    title: 'Name',
    dataIndex: "name",
    sortDirections: 'descend',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Price, $',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
}]
   
 function AssetsTable() {
    const {assets} = useCrypto()
    const data = assets.map((a)  => ({
        key: a.id,
        name: a.id,
        price: a.price,
        amount: a.amount,
    }))
 return (
<Table pagination={false}  columns={columns} dataSource={data}  />
  )
}
export default AssetsTable
