import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {


    render() {
        return(
            <div className="blog-page">
                <h1 className="page-header" > Blog </h1>
                <h2 className="blog-post" id="blog-post-1">
                    Blog post 1
                </h2>
                <p className="post-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus enim felis, eget egestas risus dictum nec. Nulla porta laoreet quam non condimentum. Nulla facilisi. Sed nec rutrum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eget lacus finibus, iaculis mi laoreet, dictum urna. Ut bibendum eros quis finibus luctus. Aliquam arcu sapien, tincidunt scelerisque libero ac, maximus laoreet sapien. Integer venenatis imperdiet interdum. Cras lacinia tortor eu convallis ultricies. Donec mollis, mauris quis mattis ultrices, eros orci iaculis diam, id pellentesque magna leo in risus. Cras vulputate, ligula eget faucibus accumsan, massa nunc accumsan lacus, viverra fringilla quam turpis quis felis.
Vivamus orci justo, lacinia laoreet congue interdum, tristique sit amet odio. Nulla ac tellus gravida, vehicula diam egestas, pretium ex. Etiam at vulputate urna. Nunc tristique enim eu urna placerat sagittis. Aliquam porta interdum ligula non blandit. Fusce interdum orci in dui mattis, vitae pharetra dolor pulvinar. Vivamus sit amet nunc mattis, efficitur odio ac, sodales nibh. Integer consequat tortor non ipsum commodo, non tincidunt nibh faucibus. Donec feugiat tellus sed nisi congue ornare
Nulla malesuada posuere eros at cursus. Maecenas eget malesuada nisi. Phasellus id finibus turpis, vitae hendrerit nibh. Etiam tincidunt commodo tellus ut auctor. Ut feugiat tellus eget arcu mollis, sit amet tempus dui aliquet. Pellentesque sit amet varius lacus, sit amet condimentum ex. Nam lectus est, imperdiet vitae quam ut, aliquam tristique tellus. Ut vestibulum est hendrerit ornare pellentesque. Maecenas in felis ut risus egestas porta et id tortor.
Duis congue risus nulla, vitae tristique ex malesuada at. Fusce sit amet ante et enim sodales placerat vel id risus. Nunc congue, ante et commodo varius, neque nisl feugiat lacus, quis viverra erat purus in nulla. Praesent ac tristique felis. Maecenas eget nunc sed mauris posuere venenatis. Vivamus augue mauris, dictum vel volutpat eu, accumsan in nisl. Donec vel velit vitae dolor posuere pharetra. Nunc a cursus odio, ut ultricies metus. Phasellus enim tellus, vehicula non fermentum rutrum, ultricies vitae lacus. Sed interdum ullamcorper urna nec tincidunt. Integer at diam vitae tellus scelerisque convallis eget a ante. Pellentesque ut risus orci. Mauris id quam hendrerit, egestas lorem sit amet, sollicitudin risus. Curabitur augue quam, imperdiet quis consectetur non, laoreet in eros. In eu facilisis elit.
Donec feugiat magna metus, interdum porta urna interdum eu. Suspendisse nec congue nunc. Morbi purus dolor, placerat venenatis faucibus tempus, rutrum ut ligula. Sed et condimentum arcu. Maecenas aliquam nunc fringilla dignissim venenatis. Curabitur venenatis cursus sem sed interdum. Phasellus egestas, nisl et fermentum luctus, dui libero efficitur mi, quis luctus purus leo vitae felis. Nullam nibh dolor, laoreet nec odio ut, cursus sollicitudin erat. Suspendisse eget finibus quam.</p>
                <h2 className="blog-post" id="blog-post-2">
                    Blog post 2
                </h2>
                <h2 className="blog-post" id="blog-post-3">
                    Blog post 3
                </h2>
                <h2 className="blog-post" id="blog-post-4">
                    Blog post 4
                </h2>
            </div>
        )
    }
}

export default Blog