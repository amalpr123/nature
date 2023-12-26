import './home.css'
import { useNavigate } from 'react-router-dom'

function HOME(){
  const Navigate=useNavigate();
  const One=(()=>{
    Navigate('/never')   
  })
  const two=(()=>{
    Navigate('/flora')
  })
  const three=(()=>{
    Navigate('/protect')
  })
  const four=(()=>{
    Navigate('/donate')
  })
    return(
        <div>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"500px"}} src="https://img.freepik.com/premium-photo/hand-delicately-touched-moss-trunk-large-tree-it-reflects-deep-connection-with-nature_114016-1199.jpg" class="d-block w-100" alt=""/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{marginLeft:"-715px",marginTop:"-400px"}} className={"cl"}><b>FOR SAVE NATURE</b></h1>
        <button onClick={One} style={{marginLeft:"-755px",marginTop:"10px"}} type="button" class="btn btn-outline-success">project never let</button>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"500px"}} src="https://images.unsplash.com/photo-1600781980959-118cf6eae2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{marginLeft:"-715px",marginTop:"-400px"}} ><b>KNOW DEEPLY</b></h1>
        <button onClick={two} style={{marginLeft:"-755px",marginTop:"20px"}} type="button" class="btn btn-outline-secondary">flora and fauna</button>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"500px"}} src="https://cnr.ncsu.edu/news/wp-content/uploads/sites/10/2021/08/forest-landscape-unsplash.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{marginTop:"-400px",marginLeft:"-715px"}}><b>FRIENDSHIP ACROSS THE NATURE</b></h5>
        <button onClick={three} style={{marginLeft:"-755px",marginTop:"20px"}} type="button" class="btn btn-outline-success">HOW WE PROTECT</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          
         
<h1 style={{marginTop:"70px"}}><b>BEAUTIFUL PLANER FOR EVERYONE</b></h1>
<p style={{color:"black"}}><b>Connected Planet Foundation is a charity set up with the overarching goal of connecting people to our beautiful planet. We believe that everyone has the right to experience the wonders of the natural world, and we believe everyone should be given the tools to help protect it. 
Connected Planet Foundation’s mission is simple. To connect people to themselves, each other and to the planet, by providing opportunities for communities to experience the wonders of the natural world, whilst also helping to conserve it. In doing so we aim to create the next generation of nature enthusiasts and conservationists. </b>
</p>
<h1 className="title"><b>HOW WE SERVE AND EXPLORE</b></h1>
<p style={{color:"black"}}><b>The set up and ongoing funding of three Conservation Clubs 
at schools in the Mara region of Kenya.

The funding of field trips and wilderness camps for local communities
to learn about and connect with wildlife. 

The support of the Bushbabies 
environmental education programme, South Africa.

The sponsorship of the Green Kidz conservation
bus, South Africa.

Educational school presentations on the impact
of littering and how we can help, UK.

​Ubuntu schools partnership programme, connecting
children across the globe.
 
The set up of litter picking clubs in schools, to promote clean communities
and empowered children.</b></p>
<h1 style={{marginTop:"50px",color:"green"}} ><b><u>SAVE NATURE</u></b></h1> 



<div style={{display:"flex"}}>
  
          <img style={{marginLeft:"-45px"}} src='https://media.istockphoto.com/id/1218694103/photo/royal-tiger-isolated-on-white-background-clipping-path-included-the-tiger-is-staring-at-its.webp?b=1&s=170667a&w=0&k=20&c=n7HXUCULBB4IzXu8APSHbnvWUM_oePUypmgADLp6w7M='/>
      
        </div>
        
        <img style={{marginTop:"-350px",marginLeft:"-70px",height:"325px"}} src='https://img.freepik.com/premium-photo/painting-island-with-waterfall-trees-it_667286-1288.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais'/>
        
<div>
            <video  style={{marginTop:"70px",}} width="100%" height="100%" controls>
                <source src="https://player.vimeo.com/external/655227075.sd.mp4?s=24c6086ab63c7ce11f57f452a6ab83f00f237d34&profile_id=164&oauth_token_id=57447761" type="video/mp4" />
            </video>
        </div>
       <div style={{}}>
        <h1 style={{marginTop:"65px"}}><b>HELP NATURE AND GET ATRACTIVE</b></h1>
        <img  style={{marginTop:"65px"}} src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2F2ZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle" alt="Cinque Terre" width="304" height="236"/> 
        
        <img style={{marginTop:"65px"}} src="https://media.istockphoto.com/id/1221265610/photo/african-american-father-and-daughter-holding-small-seedling-at-community-garden-greenery.jpg?s=612x612&w=0&k=20&c=8Wv7P_AmXLmtnKgfgThcrwGR3iAxvpTPQoKcPHOPLzo=" class="rounded-circle" alt="Cinque Terre" width="304" height="236"/>
        <img style={{marginTop:"65px"}} src="https://forestsociety.org/sites/default/files/styles/featured_image/public/02_5H5W_MulliganForest_20180801_ELord-2_feature.jpg?itok=yf-BorfO" class="rounded-circle" alt="Cinque Terre" width="304" height="236"/> <br/>
        <h1 style={{marginTop:"30px",marginLeft:"-595px"}}><i>1000+</i></h1>
        <p  style={{marginLeft:"-605px",color:"black"}}><b>Children that have benefitted <br/>from our environmental assemblies.</b></p>
        <h1 style={{marginTop:"-120px"}}><b><i>400</i></b></h1>
        <p style={{color:"black"}}><b>Trees contribute directly to the <br/>environment by providing oxygen</b></p>
        <button onClick={four} style={{marginTop:"90px",width:"300px"}} type="button" class="btn btn-dark btn-lg">DONATE</button>
        
        </div>

        </div>
    )
}
export default HOME