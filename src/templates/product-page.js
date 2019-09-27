import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>

<div id="SukumuDiv" class="anychart-embed SukumuDiv">
 <script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-base.min.js"></script> 
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-core.min.js"></script>
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-stock.min.js"></script>
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-annotations.min.js"></script>
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-exports.min.js"></script>
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-ui.min.js"></script>
<script src="https://cdn.anychart.com/releases/8.7.0/js/anychart-data-adapter.min.js"></script>
<script src="https://cdn.anychart.com/csv-data/csco-daily-short.js"></script>
<div id="SukumuStyle" style="display:none;">

</div>

<script>(function(){
function ac_add_to_head(el){
	var head = document.getElementsByTagName('head')[0];
	head.insertBefore(el,head.firstChild);
}
function ac_add_link(url){
	var el = document.createElement('link');
	el.rel='stylesheet';el.type='text/css';el.media='all';el.href=url;
	ac_add_to_head(el);
}
function ac_add_style(css){
	var ac_style = document.createElement('style');
	if (ac_style.styleSheet) ac_style.styleSheet.cssText = css;
	else ac_style.appendChild(document.createTextNode(css));
	ac_add_to_head(ac_style);
}
ac_add_link('https://cdn.jsdelivr.net/gh/Sukumu/GatsbySite@latest/src/components/all.sass');
ac_add_link('https://cdn.anychart.com/releases/8.7.0/css/anychart-ui.min.css');
ac_add_link('https://cdn.anychart.com/releases/v8/fonts/css/anychart-font.min.css');
ac_add_style(document.getElementById("SukumuStyle").innerHTML);
ac_add_style(".SukumuDiv{width:600px;height:450px;}");
})();</script>

<select id="typeSelect" onclick="create()">
    <option value="default" selected disabled>Annotation Type</option>
    <option value="andrews-pitchfork">Andrews' Pitchfork</option>
    <option value="ellipse">Ellipse</option>
    <option value="fibonacci-arc">Fibonacci Arc</option>
    <option value="fibonacci-fan">Fibonacci Fan</option>
    <option value="fibonacci-retracement">Fibonacci Retracement</option>
    <option value="fibonacci-timezones">Fibonacci Time Zones</option>  
    <option value="horizontal-line">Horizontal Line</option> 
    <option value="infinite-line">Infinite Line</option>
    <option value="line">Line Segment</option>
    <option value="marker">Marker</option>   
    <option value="ray">Ray</option>
    <option value="rectangle">Rectangle</option>
    <option value="trend-channel">Trend Channel</option>
    <option value="triangle">Triangle</option>
    <option value="vertical-line">Vertical Line</option>
</select>
<button onclick="removeAll()">Remove All</button>

<div id="container"></div>
<script>

anychart.onDocumentReady(function () {  

//**********************************************************************
var api_key = "demo";    
var data_type = "csv";
var FXfunction =  "FX_DAILY";    //document.getElementById("Forex_Function").innerHTML; //FunctionObj.options[FunctionObj.selectedIndex].text; 
var from_symbol =  "EUR";   //str.substring(0, str.indexOf("/"));
var to_symbol = "USD";    //str.substring(lastSlash+1)
var pair = from_symbol + to_symbol;
var today = new Date();
var getCSV = "https://www.alphavantage.co/query?"+"function="+FXfunction+"&from_symbol="+from_symbol+"&to_symbol="+to_symbol+"&apikey="+api_key+"&datatype="+data_type;
//**********************************************************************

//anychart.data.loadCsvFile(getCSV, function (data) {
     var dataTable = anychart.data.table();
     dataTable.addData(get_csco_daily_short_data());
      //dataTable.addData(data);
      
    //var mapping = dataTable.mapAs({'open': 1, 'high': 2, 'low': 3, 'close': 4});
    var mapping = dataTable.mapAs({"value": 1, "value": 2, "value": 3, "value": 4});  
    var chart = anychart.stock(); 
    plot = chart.plot(0);  
    var series = plot.line(mapping);
    series.name(pair);  
    chart.title(FXfunction);
    chart.container("container"); 
    chart.draw();

    // reset the select list to the first option
    chart.listen("annotationDrawingFinish", function(){document.getElementById("typeSelect").value = "default";});

});

// create annotations
function create() {var select = document.getElementById("typeSelect");
  plot.annotations().startDrawing(select.value);}

// remove all annotations
function removeAll() {plot.annotations().removeAllAnnotations();}
</script>
</div>





    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {pricing.heading}
              </h2>
              <p className="is-size-5">{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
