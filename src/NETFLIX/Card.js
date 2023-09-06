import React from 'react'

export default function Card(props) {
  return (
 <div className=' col-12 col-sm-6 col-md-4 col-lg-3 mt-2'>
    <div className="card" >
          <img className="card-img-top" src={props.img} alt="" />
      <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <a href={props.link} className="btn btn-primary mt-1">Watch now</a>
      </div>
    </div>
</div>
  )
}
