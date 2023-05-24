import { Layout, Row, Col } from 'antd';
import React from 'react'

const Content = () => {
  return (
    <Layout.Content>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
         <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <div className='bg-blue-400 p-5 text-center border-solid border-2'>col</div>
          </Col>
        </Row>
    </Layout.Content>
  );
}

export default Content