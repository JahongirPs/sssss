import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import { instance } from "../../api/axios";
import "./OrderDetail.scss"  
import { BsFillCartCheckFill } from 'react-icons/bs'
import {AiFillDelete} from  "react-icons/ai"


const OrderDetail = () => {
    let {status} = useParams();
    console.log(status);
    
    const [order , setOrder] = useState([])
    useEffect(() => {
        instance("/order/all-orders", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access-admin-token"),
      },
    })
    .then((response) => 
         setOrder(response?.data?.allOrders)
    )
    .catch(err => console.log(err))
} , [status]) 

  let contactededs = order.filter(item => item?.contacted === true)
  let notcontacted = order.filter(item => item?.contacted === false)

  console.log(contactededs)
  console.log(notcontacted);

  return (
		<div className='main__todo'>
			{status === 'contact'
				? contactededs.map(item => (
						<div className='AllTodo'>
							<div className='TodoAllList'>
								<div className='TodoMain'>
									<div className='icons__carts-main'>
										<BsFillCartCheckFill className='icons__cart' />
									</div>
									<div className='TodoText'>
										<p className='text__name'>{item?.fullname}</p>
										<p className='text__phone'>{item?.phonenumber}</p>
									</div>
								</div>
								<div className='Contacted__main'>
									{item?.contacted === true ? (
										<div className='Contacted'>
											<div></div>
											<p>Связались</p>
										</div>
									) : (
										<div className='nContacted'>
											<div></div>
											<p>Не связались</p>
										</div>
									)}
								</div>
								<div className='CreateData'>
									<div className='Data'>
										<p>
											Время заказа товара: <span> {item?.orderedAt}</span>
										</p>
									</div>
								</div>
								<div className='AllPrice'>
									<div className='Length'>
										<p>
											Общее количество товаров:{' '}
											<span>{item?.orderedproducts.at(0).quantity} ta</span>
										</p>
									</div>
									<div className='Price'>
										<p>
											Общая стоимость товара:{' '}
											<span>{item?.orderedproducts.at(0).cost} СУМ</span>
										</p>
									</div>
								</div>
							</div>
						</div>
				  ))
				: status === 'all'
				? order.map(item => (
						<div className='AllTodo'>
							<div className='TodoAllList'>
								<div className='TodoMain'>
									<div className='icons__carts-main'>
										<BsFillCartCheckFill className='icons__cart' />
									</div>
									<div className='TodoText'>
										<p className='text__name'>{item?.fullname}</p>
										<p className='text__phone'>{item?.phonenumber}</p>
									</div>
								</div>
								<div className='Contacted__main'>
									{item?.contacted === true ? (
										<div className='Contacted'>
											<div></div>
											<p>Связались</p>
										</div>
									) : (
										<div className='nContacted'>
											<div></div>
											<p>Не связались</p>
										</div>
									)}
								</div>
								<div className='CreateData'>
									<div className='Data'>
										<p>
											Время заказа товара: <span> {item?.orderedAt}</span>
										</p>
									</div>
								</div>
								<div className='AllPrice'>
									<div className='Length'>
										<p>
											Общее количество товаров:{' '}
											<span>{item?.orderedproducts.at(0).quantity} ta</span>
										</p>
									</div>
									<div className='Price'>
										<p>
											Общая стоимость товара:{' '}
											<span>{item?.orderedproducts.at(0).cost} СУМ</span>
										</p>
									</div>
								</div>
								<div className='btnMain__orders'>
									<div className='btnOrders'>
										<button className='inf'>
											<span>Подробнее</span>
										</button>
										<button
											onClick={() => console.log(item?.contacted === true)}
											className='contacts'
										>
											<span>Связались</span>
										</button>
										<button title='Delete' className='deletes'>
											<AiFillDelete />
										</button>
									</div>
								</div>
							</div>
						</div>
				  ))
				: notcontacted.map(item => (
						<div className='AllTodo'>
							<div className='TodoAllList'>
								<div className='TodoMain'>
									<div className='icons__carts-main'>
										<BsFillCartCheckFill className='icons__cart' />
									</div>
									<div className='TodoText'>
										<p className='text__name'>{item?.fullname}</p>
										<p className='text__phone'>{item?.phonenumber}</p>
									</div>
								</div>
								<div className='Contacted__main'>
									{item?.contacted === true ? (
										<div className='Contacted'>
											<div></div>
											<p>Связались</p>
										</div>
									) : (
										<div className='nContacted'>
											<div></div>
											<p>Не связались</p>
										</div>
									)}
								</div>
								<div className='CreateData'>
									<div className='Data'>
										<p>
											Время заказа товара: <span> {item?.orderedAt}</span>
										</p>
									</div>
								</div>
								<div className='AllPrice'>
									<div className='Length'>
										<p>
											Общее количество товаров:{' '}
											<span>{item?.orderedproducts.at(0).quantity} ta</span>
										</p>
									</div>
									<div className='Price'>
										<p>
											Общая стоимость товара:{' '}
											<span>{item?.orderedproducts.at(0).cost} СУМ</span>
										</p>
									</div>
								</div>
							</div>
						</div>
				  ))}
		</div>
	)
}


export default OrderDetail