import {Layout,Card,Statistic,List,Typography,Tag} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalize} from '../layout/funkcia'
import CryptoContext from '../../context/crypto-context';
import { useContext } from 'react';

const contentStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

const Content = () => {
  const {assets}= useContext(CryptoContext)
  return (
    <Layout.Content style={contentStyle}>
        {assets.map((asset) =>(
  <Card key={asset.id} title="Statistic" style={{width: 350,margin:20}}>
  <Statistic
   title={capitalize(asset.id)}
   value={asset.totalAmount}
   precision={2}
   valueStyle={{
     color: asset.grow ? '#3f8600': '#cf1322',
   }}
   prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined/>}
   suffix="$"
 />
 <List  size='small'
 dataSource={[
    {title: 'Total Profit',value: asset.totalProfit,withTag: true},   
    {title: 'Asset Amount',value: asset.amount,isPlan:true},
 ]}
renderItem={(item) => (
 <List.Item>
 <span>{item.title}</span>
 <span>
    {item.withTag && (
    <Tag color={asset.grow ? 'green':'red'}>
        {asset.growPercent} %
        </Tag>
        )}
 {item.isPlan && item.value}
 {!item.isPlan && (
 <Typography.Text type={asset.grow ? 'success':'danger'}>
 {item.value.toFixed(2)} $ 
 </Typography.Text>
 )}
 </span>
 </List.Item>
  )}
/>
</Card> ))}
    </Layout.Content>
  )}
export default Content