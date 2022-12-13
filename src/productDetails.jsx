import React from 'react';
import './index.css';
import { Space, Table, Tag } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { AddProduct } from './actions';



const MyTable = ({products, AddProduct}) => {
  const handleClick = (product) =>{
    if(products.length >= 4){
      alert("Maximum 4 products has been added")
      return 
    }
    for(let i=0; i<products.length; i++){
      console.log(products[i])
      if(products[i].id === product.id){
        alert("product is already added")
        return 
      }
      
    }
    AddProduct(product);
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
      // render: (thumbnail) => <Link to = "/compare"><a onClick={handleClick()}> Compare Products</a></Link>
      render: (_, product) => {
        // console.log(product);
        return (
        <>
           <Link to = "/compare"><a onClick={() => handleClick(product)}> Compare Products</a></Link>
        </>
    )},
    },
  ];
  

    const [product, setProduct] = useState(null);
    function pullJson() {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(responseData => {
            setProduct(responseData.products)
            // console.log(responseData)
        })
    }

    useEffect(() => {
    pullJson()
    }, []);
    // console.log(product)
    return (
        <div className="card text-center m-3"> 
            <div className="card-body">
            <Table columns={columns} dataSource= {product}/>
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
  AddProduct,
})(MyTable)