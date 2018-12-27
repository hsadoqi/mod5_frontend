import React, { Component } from 'react';
import './LandingPage.css'
import Register from '../Register/Register'

class LandingPage extends Component {
    render(){
        return (
            <div className='landing-page'>
          <div className="pimg1">
            <div className='ptext'>
              <span className="border">
                  Project
              </span>
            </div>
          </div>

          <section className="section section-light">
            <h2>Section One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsum vel explicabo atque fugit voluptatem, accusamus facere voluptas, consectetur modi suscipit ducimus repellat sint quae, hic qui similique sit voluptate ea error minima ut perferendis! Quos praesentium blanditiis voluptatibus quod minus nemo, eaque iure reiciendis vero! Illo libero voluptatem facere, dignissimos autem consequuntur, ex quidem, suscipit ullam fugit adipisci! Excepturi quidem dignissimos veniam consequuntur suscipit neque inventore illo. Quidem eius, ad est rem hic tenetur iusto officiis accusantium necessitatibus quaerat debitis! Temporibus iste architecto maxime eaque eius tenetur dignissimos sint dicta maiores! Maiores eos, sunt ratione eius ad repudiandae ipsum.
            </p>
          </section>

          <div className="pimg2">
            <div className='ptext'>
              <span className="border trans">
                  Image Two Text
              </span>
            </div>
          </div>

          <section className="section section-dark">
            <h2>Section Two</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsum vel explicabo atque fugit voluptatem, accusamus facere voluptas, consectetur modi suscipit ducimus repellat sint quae, hic qui similique sit voluptate ea error minima ut perferendis! Quos praesentium blanditiis voluptatibus quod minus nemo, eaque iure reiciendis vero! Illo libero voluptatem facere, dignissimos autem consequuntur, ex quidem, suscipit ullam fugit adipisci! Excepturi quidem dignissimos veniam consequuntur suscipit neque inventore illo. Quidem eius, ad est rem hic tenetur iusto officiis accusantium necessitatibus quaerat debitis! Temporibus iste architecto maxime eaque eius tenetur dignissimos sint dicta maiores! Maiores eos, sunt ratione eius ad repudiandae ipsum.
            </p>
          </section>

          <div className="pimg3">
            <div className='ptext'>
            </div>
          </div>

          <section className="section section-dark">
            <Register />
          </section>

          <div className="pimg4">
            <div className='ptext'>
            </div>
          </div>
        </div>
        )
    }
}

export default LandingPage