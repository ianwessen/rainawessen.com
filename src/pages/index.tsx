import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface IndexPageProps {}

const images1 = [
  {src: 'http://www.fillmurray.com/190/300'},
  {src: 'http://www.fillmurray.com/220/800'},
  {src: 'http://www.fillmurray.com/900/300'},
  {src: 'http://www.fillmurray.com/970/700'},
  {src: 'http://www.fillmurray.com/630/1200'},
  {src: 'http://www.fillmurray.com/280/300'},
  {src: 'http://www.fillmurray.com/680/300'},
  {src: 'http://www.fillmurray.com/860/600'},
]
const images2 = [
  {src: 'http://www.fillmurray.com/220/300'},
  {src: 'http://www.fillmurray.com/240/300'},
  {src: 'http://www.fillmurray.com/660/240'},
  {src: 'http://www.fillmurray.com/210/900'},
  {src: 'http://www.fillmurray.com/250/540'},
  {src: 'http://www.fillmurray.com/490/300'},
  {src: 'http://www.fillmurray.com/300/400'},
  {src: 'http://www.fillmurray.com/683/500'},
  {src: 'http://www.fillmurray.com/685/700'},
]
const images3 = [
  {src: 'http://www.fillmurray.com/490/800'},
  {src: 'http://www.fillmurray.com/660/600'},
  {src: 'http://www.fillmurray.com/274/700'},
  {src: 'http://www.fillmurray.com/630/1200'},
  {src: 'http://www.fillmurray.com/222/300'},
  {src: 'http://www.fillmurray.com/146/300'},
  {src: 'http://www.fillmurray.com/400/834'},
]

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
        let childElements = (elements) => elements.map(function(element, index){
           return (
                <div key={index} className="masonry-grid__item">
                    <img className="masonry-grid__image" src={element.src} />
                </div>
            );
        });

    
        return (
          <Layout>
            <section className="masonry-grid">
              <div className="masonry-grid__column">
                {childElements(images1)}
              </div>
              <div className="masonry-grid__column">
                {childElements(images2)}
              </div>
              <div className="masonry-grid__column">
                {childElements(images3)}
              </div>
            </section>
          </Layout>
        );
    }
}

export default IndexPage
