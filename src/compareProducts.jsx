import React from 'react';
import './index.css';
import { Space, Table, Tag } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DeleteProduct } from './actions';
import { connect } from 'react-redux';

const MyCompareTable = ({products, DeleteProduct}) => {
   

    const handleClick = (id) =>{
        DeleteProduct(id);
      }


const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Price',
        key: 'price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
      },    
    {
    title: 'DiscountPercentage',
    key: 'discountPercentage',
    dataIndex: 'discountPercentage',
    sorter: (a, b) => a.discountPercentage - b.discountPercentage
  },
  {
    title: 'Rating',
    key: 'rating',
    dataIndex: 'rating',
    sorter: (a, b) => a.rating - b.rating,
  },
  {
    title: 'Stock',
    key: 'stock',
    dataIndex: 'stock',
    sorter: (a, b) => a.stock - b.stock,
  },
  {
    title: 'Brand',
    key: 'brand',
    dataIndex: 'brand',
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
  },
  {
    title: 'Thumbnail',
    key: 'thumbnail',
    dataIndex: 'thumbnail',
    render: (thumbnail) => <img src={thumbnail} alt="img" />
  },
  {
    title: 'Images',
    key: 'images',
    dataIndex: 'images',
    render: (_, {images}) => (
        <>
            {images.map((image, index) => {
                return (
                    <Space size="middle">
                <a href={image}>image{index}</a>
               </Space>
                )
            })}
        </>
    ),
  },
  {
    title: 'Compare',
    key: 'compare',
    dataIndex: 'compare',
    // render: (thumbnail) => <button> Delete </button>
    render: (_, product) => {
        // console.log(product);
        return (
        <>
           <button onClick={() => handleClick(product.id)}> Delete </button>
        </>
    )},
  },
];

    return (
        <div className="card text-center m-3"> 
            <div className="card-body">
            <Table columns={columns} dataSource= {products} />
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    console.log(state.products)
    return {
      products: state.products,
    }
  }
  
  export default connect(mapStateToProps, {
    DeleteProduct,
  })(MyCompareTable)
