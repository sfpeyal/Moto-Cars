import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("https://blooming-refuge-66854.herokuapp.com/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h2 className="py-5">Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        /> <br />
        <textarea {...register("info")} placeholder="Description" /><br />
        <input type="number" {...register("price")} placeholder="price" /><br />
        <input {...register("picture")} placeholder="image url" /><br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;