function Rhino(){
    return(
<div>
    <h1 style={{color:"green"}}><b>ART of living</b></h1>
            <video  style={{marginTop:"70px"}} width="100%" height="100%" controls>
                <source  src="https://player.vimeo.com/progressive_redirect/playback/800503281/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=699d828ccc09562529fa59cac6b6a556a24ca142ed55286cacd8ea5575a9c38c" type="video/mp4" />
            </video>
            
            <div>
            <div style={{marginTop:"100px"}}>
            <h1 style={{marginLeft:"-1000px"}}><b>Synopsis</b></h1>
            <div>
            <p style={{color:"black",width:"450px",}}><b>Rhinos are in a retreat. In their constant battle with mankind and changing climate, these prehistoric giants keep losing. From Europe they vanished thousands of years ago, with nothing but faint cave paintings remaining in their wake. In Asia a handful of them are roaming the last fragments of the rainforest. In Africa their survivors are forced behind electric fences, guarded by heavily armed rangers.</b></p>
            </div>
            </div>
            <img style={{width:"450px",marginTop:"-250px",marginLeft:"30px"}} className="display-flex" src="https://wallpaperset.com/w/full/a/c/c/172034.jpg"/>
            </div>

 
            <button style={{marginTop:"50px"}}  type="button" class="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#demo">2007<br/> First AI rhino was born</button>
    <div style={{marginTop:"50px"}} id="demo" class="collapse">
   <b>The Rhino film project started when Layla, <br/>the world’s first artificially inseminated rhino was born in the Budapest Zoo, and we filmed the event. </b> 

    </div>
    <div id="accordion " style={{marginTop:"10px"}}>
        <div class="card">
            <div class="card-header">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseone">
               2008<br/> Filming in Africa</a>
                

                </div>
                <div id="collapseone" class="collapse show" data-bs-parent="#accordion">
                    <div class="card-body"><b> We filmed how veterinarians collected the first sperm samples from wild rhinos in Africa. </b>

                    </div>
                </div>

                </div>
                
                
                <div class="card">
                    <div class="card-header">
                        <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseone">
                       2009<br/> Filming in Borneo</a>
                        
        
                        </div>
                        <div id="collapseone" class="collapse show" data-bs-parent="#accordion">
                            <div class="card-body"><b> Since 2011 we have been filming the Bornean Rhino<br/> (Dicerorhinus sumatrensis harrissoni) a critically endangered subspecies of the Sumatran Rhino. </b>
        
                            </div>
                        </div>
        
                        </div>


            

        
        </div>
        

    </div>

       
    )
}
export default Rhino